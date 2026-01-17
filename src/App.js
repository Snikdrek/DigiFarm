import React, { useEffect, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Landing from './components/Landing';
import CropManagement from './components/CropManagement';
import WeatherForecast from './components/WeatherForecast';
import MarketPrices from './components/MarketPrices';
import IrrigationManagement from './components/IrrigationManagement';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import DiseaseDetection from './components/DiseaseDetecton';
import SetupProfile from './components/SetupProfile';

const FARMER_EMAIL_KEY = 'farmer_email';
const FARMER_ID_KEY = 'farmer_id';
const EXPERT_EMAIL_KEY = 'expert_email';
const FARMER_LOGGED_IN_KEY = 'farmer_logged_in';
const EXPERT_LOGGED_IN_KEY = 'expert_logged_in';

// Pages where navbar SHOULD be shown (same idea as your example)
const NAVBAR_PATHS = [
  '/dashboard',
  '/crops',
  '/weather',
  '/market',
  '/irrigation',
  '/faq',
  '/home',
  '/disease-detection',
  '/setup-profile',
];

const ConditionalNavbar = ({
  farmerEmail,
  expertEmail,
  isFarmerLoggedIn,
  isExpertLoggedIn,
  onLogout,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const shouldShowNavbar = NAVBAR_PATHS.some(
    (p) => location.pathname === p || location.pathname.startsWith(`${p}/`)
  );
  if (!shouldShowNavbar) return null;

  const signedInLabel =
    isFarmerLoggedIn ? `Farmer: ${farmerEmail}` :
    isExpertLoggedIn ? `Expert: ${expertEmail}` :
    'Not signed in';

  const showLogout = isFarmerLoggedIn || isExpertLoggedIn;

  const navItems = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/home', label: 'Home' },
    { path: '/crops', label: 'Crops' },
    { path: '/weather', label: 'Weather' },
    { path: '/market', label: 'Market' },
    { path: '/irrigation', label: 'Irrigation' },
    { path: '/faq', label: 'FAQ' },
    { path: '/disease-detection', label: 'Disease Detection' },
    { path: '/setup-profile', label: 'Setup Profile' },
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <nav className="navbar">
      <div
        className="nav-brand"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          width: '100%',
        }}
      >
        <div>
          <h1 style={{ margin: 0, marginBottom: '0.55rem', cursor: 'pointer' }} onClick={() => navigate('/home')}>
            🌾 DigiFarm
          </h1>
          <span className="nav-user">{signedInLabel}</span>
        </div>

        {showLogout ? (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onLogout}
            style={{ height: 'fit-content' }}
          >
            Logout
          </button>
        ) : null}
      </div>

      <ul className="nav-menu">
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
    </nav>
  );
};

function AppInner() {
  const navigate = useNavigate();

  // Farmer state
  const [farmerEmail, setFarmerEmail] = useState(() => localStorage.getItem(FARMER_EMAIL_KEY) || '');
  const [farmerId, setFarmerId] = useState(() => localStorage.getItem(FARMER_ID_KEY) || '');
  const [isFarmerLoggedIn, setIsFarmerLoggedIn] = useState(
    () => localStorage.getItem(FARMER_LOGGED_IN_KEY) === 'true'
  );

  // Expert state
  const [expertEmail, setExpertEmail] = useState(() => localStorage.getItem(EXPERT_EMAIL_KEY) || '');
  const [isExpertLoggedIn, setIsExpertLoggedIn] = useState(
    () => localStorage.getItem(EXPERT_LOGGED_IN_KEY) === 'true'
  );

  // Persist farmer
  useEffect(() => {
    localStorage.setItem(FARMER_EMAIL_KEY, farmerEmail);
  }, [farmerEmail]);

  useEffect(() => {
    localStorage.setItem(FARMER_ID_KEY, farmerId);
  }, [farmerId]);

  useEffect(() => {
    localStorage.setItem(FARMER_LOGGED_IN_KEY, String(isFarmerLoggedIn));
  }, [isFarmerLoggedIn]);

  // Persist expert
  useEffect(() => {
    localStorage.setItem(EXPERT_EMAIL_KEY, expertEmail);
  }, [expertEmail]);

  useEffect(() => {
    localStorage.setItem(EXPERT_LOGGED_IN_KEY, String(isExpertLoggedIn));
  }, [isExpertLoggedIn]);

  const handleLogout = () => {
    localStorage.clear();

    setFarmerEmail('');
    setFarmerId('');
    setExpertEmail('');
    setIsFarmerLoggedIn(false);
    setIsExpertLoggedIn(false);

    navigate('/login');
  };

  return (
    <div className="app-container">
      <ConditionalNavbar
        farmerEmail={farmerEmail}
        expertEmail={expertEmail}
        isFarmerLoggedIn={isFarmerLoggedIn}
        isExpertLoggedIn={isExpertLoggedIn}
        onLogout={handleLogout}
      />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route
            path="/login"
            element={
              <Login
                farmerEmail={farmerEmail}
                setFarmerEmail={setFarmerEmail}
                farmerId={farmerId}
                setFarmerId={setFarmerId}
                isFarmerLoggedIn={isFarmerLoggedIn}
                setIsFarmerLoggedIn={setIsFarmerLoggedIn}
                expertEmail={expertEmail}
                setExpertEmail={setExpertEmail}
                isExpertLoggedIn={isExpertLoggedIn}
                setIsExpertLoggedIn={setIsExpertLoggedIn}
              />
            }
          />

          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Dashboard farmerId={farmerId} />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/market" element={<MarketPrices />} />
          <Route path="/irrigation" element={<IrrigationManagement farmerId={farmerId} />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/home" element={<Home />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route path="/setup-profile" element={<SetupProfile farmerId={farmerId} />} />

        </Routes>
      </div>

      <style>{`
        .app-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}