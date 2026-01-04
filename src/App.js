import React, { useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import CropManagement from './components/CropManagement';
import WeatherForecast from './components/WeatherForecast';
import MarketPrices from './components/MarketPrices';
import IrrigationManagement from './components/IrrigationManagement';
import Dashboard from './components/Dashboard';
import FAQ from './components/FAQ';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('landing');
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'landing':
        return <Landing onFinish={() => setCurrentPage('login')} />;
      case 'dashboard': return <Dashboard />;
      case 'crops': return <CropManagement />;
      case 'weather': return <WeatherForecast />;
      case 'market': return <MarketPrices />;
      case 'irrigation': return <IrrigationManagement />;
      case 'faq': return <FAQ />;
      case 'login':
        return (
          <Login
            onLogin={(user) => { setCurrentUser(user); setCurrentPage('dashboard'); }}
            onRegisterLink={() => setCurrentPage('register')}
          />
        );
      case 'register':
        return <Register onRegisterComplete={(user) => { setCurrentUser(user); setCurrentPage('dashboard'); }} />;
      default: return <Landing onFinish={() => setCurrentPage('login')} />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>🌾 DigiFarm</h1>
          {currentUser ? <span className="nav-user">Signed in: {currentUser.name || currentUser.email}</span> : <span className="nav-user">Not signed in</span>}
        </div>
        <ul className="nav-menu">
          <li onClick={() => setCurrentPage('landing')} className={currentPage === 'landing' ? 'active' : ''}>Welcome</li>
          <li onClick={() => setCurrentPage('dashboard')} className={currentPage === 'dashboard' ? 'active' : ''}>Dashboard</li>
          <li onClick={() => setCurrentPage('crops')} className={currentPage === 'crops' ? 'active' : ''}>Crop Management</li>
          <li onClick={() => setCurrentPage('weather')} className={currentPage === 'weather' ? 'active' : ''}>Weather</li>
          <li onClick={() => setCurrentPage('market')} className={currentPage === 'market' ? 'active' : ''}>Market Prices</li>
          <li onClick={() => setCurrentPage('irrigation')} className={currentPage === 'irrigation' ? 'active' : ''}>Irrigation</li>
          <li onClick={() => setCurrentPage('faq')} className={currentPage === 'faq' ? 'active' : ''}>FAQ</li>
          {currentUser ? (
            <li className="logout" onClick={handleLogout}>Logout</li>
          ) : null}
        </ul>
      </nav>
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; 2025 DigiFarm - Smart Agriculture Solutions | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
