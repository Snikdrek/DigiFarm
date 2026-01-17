import React, { useState } from "react";

/* ================= GEMINI REST CONFIG ================= */
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
/* ===================================================== */

function MarketPrices() {
  const [crop, setCrop] = useState("rice");
  const [location, setLocation] = useState("Bangladesh");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  /* -------- PROMPT BUILDER (same idea as chatbot) -------- */
  const buildPrompt = (crop, location) => `
You are an agriculture market expert.

Provide a brief market analysis for ${crop} in ${location}.

Return ONLY valid JSON with the following keys:
- estimatedPrice (string, include currency)
- trend (Rising / Falling / Stable)
- explanation (2–3 short sentences)

Do not include markdown or extra text.
`;

  /* -------- FETCH MARKET INSIGHT -------- */
  const getInsight = async () => {
    if (!crop.trim() || !location.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: buildPrompt(crop, location) }],
            },
          ],
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(errText);
      }

      const data = await response.json();

      const text =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

      // Extract JSON safely (same idea as before)
      const jsonMatch = text.match(/\{[\s\S]*\}/);

      if (jsonMatch) {
        setResult(JSON.parse(jsonMatch[0]));
      } else {
        setResult({
          estimatedPrice: "Not available",
          trend: "Unknown",
          explanation: text || "No market data returned.",
        });
      }
    } catch (err) {
      console.error("Gemini Market Error:", err);
      setError("⚠️ Unable to fetch market prices right now.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <h1 className="page-title">💰 Market Prices</h1>
      <p className="page-subtitle">
        AI-based crop price estimate and trend
      </p>

      <div className="card" style={{ marginTop: "1.5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
          <input
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            placeholder="Crop (e.g., rice)"
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (e.g., Bangladesh)"
          />
          <button
            className="btn"
            onClick={getInsight}
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Price"}
          </button>
        </div>

        {error && (
          <p style={{ marginTop: "1rem", color: "#c62828" }}>
            {error}
          </p>
        )}

        {result && (
          <div
            className="card"
            style={{
              marginTop: "1.25rem",
              background: "#f1f8e9",
            }}
          >
            <p><strong>Estimated Price:</strong></p>
            <p style={{ fontSize: "1.5rem" }}>
              {result.estimatedPrice}
            </p>

            <p><strong>Trend:</strong></p>
            <p>{result.trend}</p>

            <p><strong>Explanation:</strong></p>
            <p>{result.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MarketPrices;
