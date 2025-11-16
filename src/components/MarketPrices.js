import React from 'react';

function MarketPrices() {
  return (
    <div className="page-container">
      <h1 className="page-title">💰 Market Prices</h1>
      <p className="page-subtitle">Live commodity prices and market trends</p>

      <div className="stats-container">
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #43a047 0%, #66bb6a 100%)' }}>
          <h3>↑ 5.2%</h3>
          <p>Overall Market Growth</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #7cb342 0%, #9ccc65 100%)' }}>
          <h3>24</h3>
          <p>Commodities Tracked</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #558b2f 0%, #689f38 100%)' }}>
          <h3>$8,250</h3>
          <p>Avg Price/Ton</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #33691e 0%, #558b2f 100%)' }}>
          <h3>Updated</h3>
          <p>Just Now</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Current Commodity Prices</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Current Price ($/ton)</th>
              <th>Yesterday</th>
              <th>Change</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Wheat</strong></td>
              <td>$285</td>
              <td>$278</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>+2.5%</td>
              <td>📈</td>
            </tr>
            <tr>
              <td><strong>Corn</strong></td>
              <td>$245</td>
              <td>$248</td>
              <td style={{ color: '#f44336', fontWeight: '600' }}>-1.2%</td>
              <td>📉</td>
            </tr>
            <tr>
              <td><strong>Soybeans</strong></td>
              <td>$512</td>
              <td>$505</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>+1.4%</td>
              <td>📈</td>
            </tr>
            <tr>
              <td><strong>Rice</strong></td>
              <td>$425</td>
              <td>$425</td>
              <td style={{ color: '#757575', fontWeight: '600' }}>0.0%</td>
              <td>➡️</td>
            </tr>
            <tr>
              <td><strong>Barley</strong></td>
              <td>$198</td>
              <td>$192</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>+3.1%</td>
              <td>📈</td>
            </tr>
            <tr>
              <td><strong>Oats</strong></td>
              <td>$175</td>
              <td>$178</td>
              <td style={{ color: '#f44336', fontWeight: '600' }}>-1.7%</td>
              <td>📉</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Vegetable Prices ($/kg)</h3>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🍅</div>
            <h3>Tomatoes</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$2.85/kg</p>
            <p style={{ color: '#43a047' }}>↑ 3.2% from yesterday</p>
          </div>

          <div className="card">
            <div className="card-icon">🥕</div>
            <h3>Carrots</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$1.95/kg</p>
            <p style={{ color: '#f44336' }}>↓ 0.8% from yesterday</p>
          </div>

          <div className="card">
            <div className="card-icon">🥔</div>
            <h3>Potatoes</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$1.45/kg</p>
            <p style={{ color: '#757575' }}>No change</p>
          </div>

          <div className="card">
            <div className="card-icon">🥬</div>
            <h3>Lettuce</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$3.20/kg</p>
            <p style={{ color: '#43a047' }}>↑ 1.5% from yesterday</p>
          </div>

          <div className="card">
            <div className="card-icon">🥒</div>
            <h3>Cucumber</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$2.15/kg</p>
            <p style={{ color: '#43a047' }}>↑ 2.1% from yesterday</p>
          </div>

          <div className="card">
            <div className="card-icon">🌶️</div>
            <h3>Peppers</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2e7d32' }}>$4.50/kg</p>
            <p style={{ color: '#f44336' }}>↓ 1.3% from yesterday</p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Market Insights</h3>
        <div className="card">
          <h4 style={{ color: '#2e7d32', marginBottom: '1rem' }}>📊 This Week's Trends</h4>
          <ul style={{ lineHeight: '2', color: '#558b2f' }}>
            <li>Wheat prices showing strong upward trend due to increased demand</li>
            <li>Corn prices slightly down due to good weather conditions and higher yields</li>
            <li>Tomato prices up due to seasonal factors and reduced supply</li>
            <li>Rice prices stable with consistent supply-demand balance</li>
            <li>Best time to sell: Soybeans and Barley showing positive momentum</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <button className="btn">Set Price Alert</button>
        <button className="btn btn-secondary">View Historical Data</button>
        <button className="btn btn-secondary">Export Report</button>
      </div>
    </div>
  );
}

export default MarketPrices;
