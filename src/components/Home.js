import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">Welcome to DigiFarm 🌾</h1>
      <p className="page-subtitle">Your Complete Smart Agriculture Management Platform</p>
      
      <div className="hero-section" style={{ textAlign: 'center', margin: '2rem 0' }}>
        <p style={{ fontSize: '1.2rem', color: '#558b2f', lineHeight: '1.8' }}>
          Empowering farmers with technology to maximize yield, minimize waste, 
          and build sustainable agricultural practices for a better tomorrow.
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <div className="card-icon">🌱</div>
          <h3>Crop Management</h3>
          <p>Monitor and manage your crops throughout their lifecycle. Track growth stages, schedule activities, and optimize production.</p>
        </div>

        <div className="card">
          <div className="card-icon">🌤️</div>
          <h3>Weather Forecasting</h3>
          <p>Get accurate weather predictions and alerts. Plan your farming activities based on real-time meteorological data.</p>
        </div>

        <div className="card">
          <div className="card-icon">💰</div>
          <h3>Market Prices</h3>
          <p>Stay updated with current market prices for crops and commodities. Make informed selling decisions.</p>
        </div>

        <div className="card">
          <div className="card-icon">🌍</div>
          <h3>Soil Analysis</h3>
          <p>Analyze soil health, nutrient levels, and pH balance. Get recommendations for soil improvement.</p>
        </div>

        <div className="card">
          <div className="card-icon">💧</div>
          <h3>Irrigation Management</h3>
          <p>Optimize water usage with smart irrigation systems. Schedule watering based on crop needs and weather.</p>
        </div>

        <div className="card">
          <div className="card-icon">🐛</div>
          <h3>Pest Control</h3>
          <p>Identify pests and diseases early. Get treatment recommendations and prevention strategies.</p>
        </div>

        <div className="card">
          <div className="card-icon">🚜</div>
          <h3>Farm Equipment</h3>
          <p>Manage your farming equipment inventory. Schedule maintenance and track usage.</p>
        </div>

        <div className="card">
          <div className="card-icon">👥</div>
          <h3>Farmer Community</h3>
          <p>Connect with other farmers. Share knowledge, experiences, and best practices.</p>
        </div>

        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Analytics Dashboard</h3>
          <p>View comprehensive reports and analytics. Make data-driven decisions for your farm.</p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <button className="btn">Get Started</button>
        <button className="btn btn-secondary">Learn More</button>
      </div>
    </div>
  );
}

export default Home;
