import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import CropManagement from './components/CropManagement';
import WeatherForecast from './components/WeatherForecast';
import MarketPrices from './components/MarketPrices';
import SoilAnalysis from './components/SoilAnalysis';
import IrrigationManagement from './components/IrrigationManagement';
import PestControl from './components/PestControl';
import FarmEquipment from './components/FarmEquipment';
import Dashboard from './components/Dashboard';
import Community from './components/Community';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'dashboard': return <Dashboard />;
      case 'crops': return <CropManagement />;
      case 'weather': return <WeatherForecast />;
      case 'market': return <MarketPrices />;
      case 'soil': return <SoilAnalysis />;
      case 'irrigation': return <IrrigationManagement />;
      case 'pest': return <PestControl />;
      case 'equipment': return <FarmEquipment />;
      case 'community': return <Community />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-brand">
          <h1>🌾 DigiFarm</h1>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</li>
          <li onClick={() => setCurrentPage('dashboard')} className={currentPage === 'dashboard' ? 'active' : ''}>Dashboard</li>
          <li onClick={() => setCurrentPage('crops')} className={currentPage === 'crops' ? 'active' : ''}>Crop Management</li>
          <li onClick={() => setCurrentPage('weather')} className={currentPage === 'weather' ? 'active' : ''}>Weather</li>
          <li onClick={() => setCurrentPage('market')} className={currentPage === 'market' ? 'active' : ''}>Market Prices</li>
          <li onClick={() => setCurrentPage('soil')} className={currentPage === 'soil' ? 'active' : ''}>Soil Analysis</li>
          <li onClick={() => setCurrentPage('irrigation')} className={currentPage === 'irrigation' ? 'active' : ''}>Irrigation</li>
          <li onClick={() => setCurrentPage('pest')} className={currentPage === 'pest' ? 'active' : ''}>Pest Control</li>
          <li onClick={() => setCurrentPage('equipment')} className={currentPage === 'equipment' ? 'active' : ''}>Equipment</li>
          <li onClick={() => setCurrentPage('community')} className={currentPage === 'community' ? 'active' : ''}>Community</li>
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
