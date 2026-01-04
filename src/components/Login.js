import React, { useState } from 'react';

function Login({ onLogin, onRegisterLink }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please enter both email and password.');
      return;
    }
    setError('');
    // Fake auth: in a real app, call your API here.
    onLogin({ email: form.email, name: form.email.split('@')[0] || 'User' });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Login</h1>
      <p className="page-subtitle">Access your DigiFarm dashboard</p>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error ? <p style={{ color: '#c62828', marginTop: '0.5rem' }}>{error}</p> : null}

          <button className="btn" type="submit">Login</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onRegisterLink}
            style={{ marginLeft: '0' }}
          >
            Not logged in? Please register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
