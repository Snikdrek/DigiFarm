import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ExpertNavbar.css';

function ExpertNavbar({ expertEmail, onLogout }) {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/expert-dashboard', label: 'Dashboard' },
    { path: '/expert/answer-questions', label: 'Answer Questions' },
    
    { path: '/expert/write-articles', label: 'Write Articles' },
    {path: '/disease-detection', label: 'Disease Detection'}
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <nav className="expert-navbar">
      <div className="expert-nav-container">
        <div className="expert-nav-left">
          <div className="expert-brand" onClick={() => navigate('/expert-dashboard')}>
            <span className="expert-icon">👨‍🌾</span>
            <h2>Expert Portal</h2>
          </div>
          <ul className="expert-nav-menu">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={isActive(item.path) ? 'active' : ''}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="expert-nav-right">
          <div className="expert-profile">
            <span className="profile-icon">👤</span>
            <span className="profile-email">{expertEmail}</span>
          </div>
          <button className="expert-logout-btn" onClick={onLogout}>
            <span>Logout</span>
            <span className="logout-icon">🚪</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default ExpertNavbar;
