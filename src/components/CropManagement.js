import React from 'react';

function CropManagement() {
  return (
    <div className="page-container">
      <h1 className="page-title">🌱 Crop Management</h1>
      <p className="page-subtitle">Monitor and manage your crops throughout their lifecycle</p>

      <div className="card-grid">
        <div className="card">
          <div className="card-icon">🌾</div>
          <h3>Wheat</h3>
          <p><strong>Field:</strong> Field A (10 acres)</p>
          <p><strong>Stage:</strong> Flowering</p>
          <p><strong>Health:</strong> Excellent</p>
          <p><strong>Harvest Date:</strong> Jan 15, 2026</p>
          <button className="btn" style={{ marginTop: '1rem' }}>View Details</button>
        </div>

        <div className="card">
          <div className="card-icon">🌽</div>
          <h3>Corn</h3>
          <p><strong>Field:</strong> Field B (8 acres)</p>
          <p><strong>Stage:</strong> Vegetative Growth</p>
          <p><strong>Health:</strong> Good</p>
          <p><strong>Harvest Date:</strong> Feb 10, 2026</p>
          <button className="btn" style={{ marginTop: '1rem' }}>View Details</button>
        </div>

        <div className="card">
          <div className="card-icon">🥕</div>
          <h3>Carrots</h3>
          <p><strong>Field:</strong> Field C (5 acres)</p>
          <p><strong>Stage:</strong> Root Development</p>
          <p><strong>Health:</strong> Excellent</p>
          <p><strong>Harvest Date:</strong> Dec 20, 2025</p>
          <button className="btn" style={{ marginTop: '1rem' }}>View Details</button>
        </div>

        <div className="card">
          <div className="card-icon">🍅</div>
          <h3>Tomatoes</h3>
          <p><strong>Field:</strong> Greenhouse 1 (2 acres)</p>
          <p><strong>Stage:</strong> Fruiting</p>
          <p><strong>Health:</strong> Good</p>
          <p><strong>Harvest Date:</strong> Dec 5, 2025</p>
          <button className="btn" style={{ marginTop: '1rem' }}>View Details</button>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Crop Monitoring Details</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Field</th>
              <th>Planted Date</th>
              <th>Current Stage</th>
              <th>Days to Harvest</th>
              <th>Expected Yield</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wheat</td>
              <td>Field A</td>
              <td>Sep 10, 2025</td>
              <td>Flowering</td>
              <td>60 days</td>
              <td>5 tons/acre</td>
            </tr>
            <tr>
              <td>Corn</td>
              <td>Field B</td>
              <td>Sep 20, 2025</td>
              <td>Vegetative Growth</td>
              <td>86 days</td>
              <td>6 tons/acre</td>
            </tr>
            <tr>
              <td>Carrots</td>
              <td>Field C</td>
              <td>Aug 25, 2025</td>
              <td>Root Development</td>
              <td>34 days</td>
              <td>4 tons/acre</td>
            </tr>
            <tr>
              <td>Tomatoes</td>
              <td>Greenhouse 1</td>
              <td>Aug 1, 2025</td>
              <td>Fruiting</td>
              <td>19 days</td>
              <td>8 tons/acre</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3 style={{ color: '#2e7d32', marginBottom: '1rem' }}>Add New Crop</h3>
        <div style={{ background: '#f1f8e9', padding: '1.5rem', borderRadius: '8px' }}>
          <div className="form-group">
            <label>Crop Type</label>
            <select>
              <option>Select Crop</option>
              <option>Wheat</option>
              <option>Corn</option>
              <option>Rice</option>
              <option>Soybeans</option>
              <option>Vegetables</option>
            </select>
          </div>
          <div className="form-group">
            <label>Field</label>
            <select>
              <option>Select Field</option>
              <option>Field A</option>
              <option>Field B</option>
              <option>Field C</option>
              <option>Field D</option>
            </select>
          </div>
          <div className="form-group">
            <label>Planting Date</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Area (acres)</label>
            <input type="number" placeholder="Enter area" />
          </div>
          <button className="btn">Add Crop</button>
        </div>
      </div>
    </div>
  );
}

export default CropManagement;
