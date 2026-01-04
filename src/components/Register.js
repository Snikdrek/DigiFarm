import React, { useState } from 'react';

function Register({ onRegisterComplete }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    // Fake registration: in a real app, call your API here.
    onRegisterComplete({ name: form.name, email: form.email });
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Register</h1>
      <p className="page-subtitle">Create your DigiFarm account</p>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Full name"
            />
          </div>

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
              placeholder="Create a password"
              autoComplete="new-password"
            />
          </div>

          {error ? <p style={{ color: '#c62828', marginTop: '0.5rem' }}>{error}</p> : null}

          <button className="btn" type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
