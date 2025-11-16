import React from 'react';

function WeatherForecast() {
  return (
    <div className="page-container">
      <h1 className="page-title">🌤️ Weather Forecast</h1>
      <p className="page-subtitle">Real-time weather updates and 7-day forecast for your farm</p>

      <div className="card" style={{ marginBottom: '2rem', background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)', color: 'white' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Current Weather</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '4rem' }}>☀️</div>
          <div>
            <h3 style={{ fontSize: '3rem', margin: '0' }}>24°C</h3>
            <p style={{ fontSize: '1.2rem', margin: '0' }}>Sunny & Clear</p>
          </div>
          <div style={{ textAlign: 'left' }}>
            <p><strong>Humidity:</strong> 65%</p>
            <p><strong>Wind Speed:</strong> 12 km/h</p>
            <p><strong>Pressure:</strong> 1013 hPa</p>
            <p><strong>UV Index:</strong> 6 (High)</p>
          </div>
        </div>
      </div>

      <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>7-Day Forecast</h3>
      <div className="card-grid">
        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Monday</h4>
          <div className="card-icon">☀️</div>
          <p><strong>High:</strong> 26°C</p>
          <p><strong>Low:</strong> 18°C</p>
          <p><strong>Condition:</strong> Sunny</p>
          <p><strong>Rain:</strong> 0%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Tuesday</h4>
          <div className="card-icon">⛅</div>
          <p><strong>High:</strong> 24°C</p>
          <p><strong>Low:</strong> 17°C</p>
          <p><strong>Condition:</strong> Partly Cloudy</p>
          <p><strong>Rain:</strong> 10%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Wednesday</h4>
          <div className="card-icon">☁️</div>
          <p><strong>High:</strong> 22°C</p>
          <p><strong>Low:</strong> 16°C</p>
          <p><strong>Condition:</strong> Cloudy</p>
          <p><strong>Rain:</strong> 20%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Thursday</h4>
          <div className="card-icon">🌧️</div>
          <p><strong>High:</strong> 20°C</p>
          <p><strong>Low:</strong> 15°C</p>
          <p><strong>Condition:</strong> Rainy</p>
          <p><strong>Rain:</strong> 80%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Friday</h4>
          <div className="card-icon">🌦️</div>
          <p><strong>High:</strong> 21°C</p>
          <p><strong>Low:</strong> 14°C</p>
          <p><strong>Condition:</strong> Showers</p>
          <p><strong>Rain:</strong> 60%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Saturday</h4>
          <div className="card-icon">⛅</div>
          <p><strong>High:</strong> 23°C</p>
          <p><strong>Low:</strong> 16°C</p>
          <p><strong>Condition:</strong> Partly Cloudy</p>
          <p><strong>Rain:</strong> 15%</p>
        </div>

        <div className="card">
          <h4 style={{ color: '#2e7d32' }}>Sunday</h4>
          <div className="card-icon">☀️</div>
          <p><strong>High:</strong> 25°C</p>
          <p><strong>Low:</strong> 17°C</p>
          <p><strong>Condition:</strong> Sunny</p>
          <p><strong>Rain:</strong> 5%</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Weather Alerts</h3>
        <div className="card" style={{ background: '#fff3e0', border: '2px solid #ff9800' }}>
          <h4 style={{ color: '#f57c00' }}>⚠️ Heavy Rain Alert</h4>
          <p style={{ color: '#e65100' }}>
            Heavy rainfall expected on Thursday (Nov 19). Consider postponing irrigation 
            and outdoor activities. Ensure proper drainage in all fields.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Farming Recommendations</h3>
        <div className="card">
          <ul style={{ lineHeight: '2', color: '#558b2f' }}>
            <li>✓ Good conditions for irrigation on Monday and Tuesday</li>
            <li>✓ Postpone pesticide spraying due to expected rain on Thursday</li>
            <li>✓ Consider harvesting ready crops before Thursday's rain</li>
            <li>✓ Check drainage systems before Wednesday</li>
            <li>✓ Weekend looks favorable for field maintenance work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherForecast;
