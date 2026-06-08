import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './css/style.css';
import API_BASE from './api';

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(`${API_BASE}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message); return; }
      localStorage.setItem('user', JSON.stringify(data.data));
      localStorage.setItem('loggedIn', 'true');
      alert(`Welcome back, ${data.data.firstname}! ✅`);
      navigate('/');
    } catch {
      setError('Server error. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-logo"><span>🐾</span> PetSphere</div>
          <p className="auth-subtitle">Welcome back! Sign in to your account.</p>

          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginBottom: '14px', fontSize: '14px' }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <Link to="/forgot" style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600' }}>
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="btn btn-primary">Login to Account</button>
          </form>

          <div className="divider">or</div>
          <div className="form-link">Don't have an account? <Link to="/signup">Create one free</Link></div>
        </div>
      </div>
      <footer>
        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <p>© 2026 PetSphere Pet Shop. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LoginPage;
