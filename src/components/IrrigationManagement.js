import React from 'react';

function IrrigationManagement() {
  return (
    <div className="page-container">
      <h1 className="page-title">💧 Irrigation Management</h1>
      <p className="page-subtitle">Smart water management for optimal crop growth</p>

      <div className="stats-container">
        <div className="stat-card">
          <h3>32,500L</h3>
          <p>Water Used This Month</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #7cb342 0%, #9ccc65 100%)' }}>
          <h3>95%</h3>
          <p>System Efficiency</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #558b2f 0%, #689f38 100%)' }}>
          <h3>15%</h3>
          <p>Water Saved</p>
        </div>
        <div className="stat-card" style={{ background: 'linear-gradient(135deg, #33691e 0%, #558b2f 100%)' }}>
          <h3>4</h3>
          <p>Active Zones</p>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Irrigation Schedule</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Field</th>
              <th>Crop</th>
              <th>Last Watered</th>
              <th>Next Schedule</th>
              <th>Duration</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Field A</strong></td>
              <td>Wheat</td>
              <td>Nov 15, 6:00 AM</td>
              <td>Nov 17, 6:00 AM</td>
              <td>45 min</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>Active</td>
              <td><button className="btn" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }}>Edit</button></td>
            </tr>
            <tr>
              <td><strong>Field B</strong></td>
              <td>Corn</td>
              <td>Nov 16, 7:00 AM</td>
              <td>Nov 18, 7:00 AM</td>
              <td>50 min</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>Active</td>
              <td><button className="btn" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }}>Edit</button></td>
            </tr>
            <tr>
              <td><strong>Field C</strong></td>
              <td>Carrots</td>
              <td>Nov 16, 6:30 AM</td>
              <td>Nov 17, 6:30 AM</td>
              <td>30 min</td>
              <td style={{ color: '#43a047', fontWeight: '600' }}>Active</td>
              <td><button className="btn" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }}>Edit</button></td>
            </tr>
            <tr>
              <td><strong>Field D</strong></td>
              <td>Fallow</td>
              <td>Nov 10, 6:00 AM</td>
              <td>-</td>
              <td>-</td>
              <td style={{ color: '#757575', fontWeight: '600' }}>Inactive</td>
              <td><button className="btn btn-secondary" style={{ padding: '0.3rem 0.8rem', fontSize: '0.9rem' }}>Activate</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card-grid" style={{ marginTop: '2rem' }}>
        <div className="card">
          <h3>🚰 Water Source Status</h3>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Well 1:</strong> Active (Capacity: 80%)</p>
            <p><strong>Well 2:</strong> Active (Capacity: 65%)</p>
            <p><strong>Reservoir:</strong> 85,000 L available</p>
            <p><strong>Rainwater Storage:</strong> 12,500 L</p>
            <p style={{ color: '#43a047', fontWeight: '600', marginTop: '1rem' }}>
              All sources operational ✓
            </p>
          </div>
        </div>

        <div className="card">
          <h3>📊 Water Usage Analytics</h3>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Today:</strong> 1,250 L</p>
            <p><strong>This Week:</strong> 8,750 L</p>
            <p><strong>This Month:</strong> 32,500 L</p>
            <p><strong>Average Daily:</strong> 1,080 L</p>
            <p style={{ color: '#43a047', fontWeight: '600', marginTop: '1rem' }}>
              15% below target - Excellent! 🎯
            </p>
          </div>
        </div>

        <div className="card">
          <h3>🌡️ Soil Moisture Levels</h3>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Field A:</strong> 75% (Optimal)</p>
            <p><strong>Field B:</strong> 82% (Optimal)</p>
            <p><strong>Field C:</strong> 78% (Optimal)</p>
            <p><strong>Field D:</strong> 45% (Dry - Inactive)</p>
            <p style={{ color: '#43a047', fontWeight: '600', marginTop: '1rem' }}>
              All active fields optimal ✓
            </p>
          </div>
        </div>

        <div className="card">
          <h3>⚙️ System Health</h3>
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Pumps:</strong> All operational ✓</p>
            <p><strong>Valves:</strong> All functional ✓</p>
            <p><strong>Sensors:</strong> 12/12 active ✓</p>
            <p><strong>Last Maintenance:</strong> Oct 28, 2025</p>
            <p style={{ color: '#ff9800', fontWeight: '600', marginTop: '1rem' }}>
              Next maintenance due: Dec 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Smart Irrigation Recommendations</h3>
        <div className="card">
          <ul style={{ lineHeight: '2', color: '#558b2f' }}>
            <li>✓ Current moisture levels are optimal for all active fields</li>
            <li>✓ Rain expected Thursday - consider skipping scheduled irrigation</li>
            <li>✓ Field A soil moisture declining - next watering scheduled appropriately</li>
            <li>⚠️ Field D showing low moisture - consider activating irrigation</li>
            <li>✓ System efficiency is excellent at 95%</li>
            <li>✓ Water consumption 15% below target - great conservation!</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Create Irrigation Schedule</h3>
        <div style={{ background: '#f1f8e9', padding: '1.5rem', borderRadius: '8px' }}>
          <div className="form-group">
            <label>Select Field</label>
            <select>
              <option>Field A</option>
              <option>Field B</option>
              <option>Field C</option>
              <option>Field D</option>
            </select>
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input type="time" defaultValue="06:00" />
          </div>
          <div className="form-group">
            <label>Duration (minutes)</label>
            <input type="number" placeholder="Enter duration" defaultValue="30" />
          </div>
          <div className="form-group">
            <label>Frequency</label>
            <select>
              <option>Daily</option>
              <option>Every 2 days</option>
              <option>Every 3 days</option>
              <option>Weekly</option>
              <option>Custom</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              <input type="checkbox" style={{ width: 'auto', marginRight: '0.5rem' }} />
              Skip if rain is forecasted
            </label>
          </div>
          <button className="btn">Create Schedule</button>
          <button className="btn btn-secondary">Water Now</button>
        </div>
      </div>
    </div>
  );
}

export default IrrigationManagement;
