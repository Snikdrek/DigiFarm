async function parseJsonSafely(response) {
  const text = await response.text();
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

export async function apiGet(path) {
  const res = await fetch(path, {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  });
  const data = await parseJsonSafely(res);
  if (!res.ok) {
    const msg = (data && data.message) ? data.message : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}

export async function apiPostJson(path, body) {
  const res = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await parseJsonSafely(res);
  if (!res.ok) {
    const msg = (data && data.message) ? data.message : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}

export async function apiPostForm(path, formData) {
  const res = await fetch(path, {
    method: 'POST',
    body: formData,
  });
  const data = await parseJsonSafely(res);
  if (!res.ok) {
    const msg = (data && data.message) ? data.message : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export async function fetchOpenWeather(city) {
  if (!city || !city.trim()) {
    throw new Error('City is required');
  }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&units=metric&appid=${OPENWEATHER_API_KEY}`;
  const res = await fetch(url, { headers: { Accept: 'application/json' } });
  const data = await parseJsonSafely(res);
  if (!res.ok) {
    const msg = (data && data.message) ? data.message : `Weather lookup failed (${res.status})`;
    throw new Error(msg);
  }
  return {
    temperature: data?.main?.temp,
    humidity: data?.main?.humidity,
    condition: data?.weather && data.weather[0] ? data.weather[0].description : 'N/A',
    rainForecast: data?.rain ? 'Rain expected' : 'No rain expected',
  };
}

export async function fetchMarketInsight(crop, location) {
  if (!crop || !crop.trim() || !location || !location.trim()) {
    throw new Error('Crop and location are required');
  }
  
  const prompt = `Provide a brief market analysis for ${crop} in ${location}. Include: 1) Current estimated price range in local currency, 2) Market trend (rising/falling/stable), 3) Brief explanation (2-3 sentences). Format as JSON with keys: estimatedPrice, trend, explanation.`;
  
  const url = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: prompt }]
      }]
    })
  });
  
  const data = await parseJsonSafely(res);
  if (!res.ok) {
    const msg = (data && data.error?.message) ? data.error.message : `Gemini API failed (${res.status})`;
    throw new Error(msg);
  }
  
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
  
  try {
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    // Fallback if JSON parsing fails
  }
  
  return {
    estimatedPrice: 'See explanation',
    trend: 'Variable',
    explanation: text || 'No data available'
  };
}
