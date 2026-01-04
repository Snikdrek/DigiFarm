import React, { useEffect, useState } from 'react';

function Landing({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const durationMs = 9000; // auto-redirect after 9 seconds
    const tickMs = 100;
    const steps = durationMs / tickMs;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      const pct = Math.min(100, Math.round((current / steps) * 100));
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timer);
        if (onFinish) onFinish();
      }
    }, tickMs);

    return () => clearInterval(timer);
  }, [onFinish]);

  const handleStart = () => {
    if (onFinish) onFinish();
  };

  const features = [
    { icon: '🌱', title: 'Crop Intelligence', text: 'Monitor growth stages, plan tasks, and get AI nudges for healthier fields.' },
    { icon: '🌤️', title: 'Weather Radar', text: 'Hyperlocal forecasts with action cues for irrigation, spraying, and harvest timing.' },
    { icon: '💧', title: 'Smart Irrigation', text: 'Water only where needed. Save up to 30% with moisture-aware scheduling.' },
    { icon: '💰', title: 'Market Signals', text: 'Live mandi prices and trends to maximize your selling decisions.' },
  ];

  const highlights = [
    'Sustainable by design',
    'Mobile friendly',
    'Offline-ready notes',
    'Expert-verified tips',
  ];

  return (
    <div className="landing">
      <section className="landing-hero">
        <div className="glow glow-1" />
        <div className="glow glow-2" />
        <div className="hero-content">
          <p className="eyebrow">Smart farming for every acre</p>
          <h1>
            Grow more, waste less
            <span className="accent"> with DigiFarm.</span>
          </h1>
          <p className="lead">
            Precision insights, greener workflows, and a friendly dashboard that keeps your fields, weather, and market data in sync.
          </p>
          <div className="cta-row">
            <button className="btn" onClick={handleStart}>Start now</button>
            <div className="feature-pill">
              <span className="dot" />
              Trusted by 2,500+ growers
            </div>
          </div>
          <div className="highlight-row">
            {highlights.map((item) => (
              <span key={item} className="highlight-pill">{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-badge">
            <p>Avg. yield uplift</p>
            <h3>+18%</h3>
            <small>vs last season</small>
          </div>
          <div className="floating-card">
            <div className="floating-card-row">
              <span>Moisture</span>
              <strong>72%</strong>
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: '72%' }} />
            </div>
            <div className="floating-card-row">
              <span>Water saved</span>
              <strong>28%</strong>
            </div>
            <div className="progress-track alt">
              <div className="progress-bar alt" style={{ width: '28%' }} />
            </div>
          </div>
          <div className="floating-badge badge-secondary">
            <p>Weather window</p>
            <h3>Clear • 3 days</h3>
            <small>Best time to spray</small>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-header">
          <p className="eyebrow">Everything connected</p>
          <h2>Command your farm from one calm workspace</h2>
          <p className="lead">Visualize crops, plan irrigation, and watch the numbers move in your favor.</p>
        </div>
        <div className="card-grid">
          {features.map((f) => (
            <div key={f.title} className="card card-float">
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-header">
          <p className="eyebrow">Your next moves</p>
          <h2>3 steps to greener operations</h2>
        </div>
        <div className="step-grid">
          <div className="step-card">
            <span className="step-index">01</span>
            <h4>Sign in</h4>
            <p>We set up your fields and preferences in minutes.</p>
          </div>
          <div className="step-card">
            <span className="step-index">02</span>
            <h4>Connect weather & tasks</h4>
            <p>Plan harvest, spraying, and irrigation with live signals.</p>
          </div>
          <div className="step-card">
            <span className="step-index">03</span>
            <h4>Track improvements</h4>
            <p>See yield, water, and cost metrics trend upward.</p>
          </div>
        </div>
      </section>

      <section className="redirect-section">
        <div className="redirect-card">
          <div>
            <p className="eyebrow">Getting you ready</p>
            <h3>Auto-directing to login</h3>
            <p className="lead">We will guide you to sign in. New here? You can register once you land there.</p>
          </div>
          <div className="redirect-progress">
            <div className="progress-track tall">
              <div className="progress-bar tall" style={{ height: `${progress}%` }} />
            </div>
            <p className="progress-text">{progress}%</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
