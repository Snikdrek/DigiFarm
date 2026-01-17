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
import ExpertDashboard from './components/ExpertDashboard';
import ExpertNavbar from './components/ExpertNavbar';
import ExpertArticles from './components/ExpertArticles';
import ExpertAnswers from './components/ExpertAnswers';

const FARMER_EMAIL_KEY = 'farmer_email';
const EXPERT_EMAIL_KEY = 'expert_email';
const FARMER_LOGGED_IN_KEY = 'farmer_logged_in';
const EXPERT_LOGGED_IN_KEY = 'expert_logged_in';

// Farmer navbar pages
const NAVBAR_PATHS = [
  '/dashboard',
  '/crops',
  '/weather',
  '/market',
  '/irrigation',
  '/faq',
  '/home',
  '/disease-detection',
];

// Expert navbar pages
const EXPERT_NAVBAR_PATHS = [
  '/expert-dashboard',
  '/expert/answer-questions',
  '/expert/write-articles',
  '/disease-detection',
];


// ---------------- Farmer Navbar ----------------
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

  // Disease detection rule
  if (location.pathname === '/disease-detection') {
    if (!isFarmerLoggedIn) return null;
  } else if (!shouldShowNavbar) {
    return null;
  }

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
  ];

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1 onClick={() => navigate('/home')} style={{ cursor: 'pointer' }}>🌾 DigiFarm</h1>
        <span>{signedInLabel}</span>
        {showLogout && isFarmerLoggedIn && (
          <button onClick={onLogout}>Logout</button>
        )}
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


// ---------------- Expert Navbar ----------------
const ConditionalExpertNavbar = ({ expertEmail, isExpertLoggedIn, onLogout }) => {
  const location = useLocation();

  const shouldShowExpertNavbar = EXPERT_NAVBAR_PATHS.some(
    (p) => location.pathname === p || location.pathname.startsWith(`${p}/`)
  );

  if (location.pathname === '/disease-detection') {
    if (!isExpertLoggedIn) return null;
  } else if (!shouldShowExpertNavbar) {
    return null;
  }

  return <ExpertNavbar expertEmail={expertEmail} onLogout={onLogout} />;
};


// ---------------- App Core ----------------
function AppInner() {
  const navigate = useNavigate();

  // Farmer state
  const [farmerEmail, setFarmerEmail] = useState(() => localStorage.getItem(FARMER_EMAIL_KEY) || '');
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
    localStorage.setItem(FARMER_LOGGED_IN_KEY, String(isFarmerLoggedIn));
  }, [farmerEmail, isFarmerLoggedIn]);

  // Persist expert
  useEffect(() => {
    localStorage.setItem(EXPERT_EMAIL_KEY, expertEmail);
    localStorage.setItem(EXPERT_LOGGED_IN_KEY, String(isExpertLoggedIn));
  }, [expertEmail, isExpertLoggedIn]);

  const handleLogout = () => {
    localStorage.clear();

    setFarmerEmail('');
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

      <ConditionalExpertNavbar
        expertEmail={expertEmail}
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

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/crops" element={<CropManagement />} />
          <Route path="/weather" element={<WeatherForecast />} />
          <Route path="/market" element={<MarketPrices />} />
          <Route path="/irrigation" element={<IrrigationManagement />} />
          <Route path="/faq" element={<FAQ farmerEmail={farmerEmail} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />

          <Route path="/expert-dashboard" element={<ExpertDashboard />} />
          <Route path="/expert/write-articles" element={<ExpertArticles expertEmail={expertEmail} />} />
          <Route path="/expert/answer-questions" element={<ExpertAnswers expertEmail={expertEmail} />} />
        </Routes>
      </div>
    </div>
  );
}


// ---------------- Router Wrapper ----------------
export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
