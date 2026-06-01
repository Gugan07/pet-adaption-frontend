import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './css/style.css';

function LoginPage() {
  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-logo"><span>🐾</span> PawHaven</div>
          <p className="auth-subtitle">Welcome back! Sign in to your account.</p>
          <form>
            <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@example.com" /></div>
            <div className="form-group"><label>Password</label><input type="password" placeholder="Enter your password" /></div>
            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
              <Link to="/forgot" style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600' }}>Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Login to Account</button>
          </form>
          <div className="divider">or</div>
          <div className="form-link">Don't have an account? <Link to="/signup">Create one free</Link></div>
        </div>
      </div>
      <footer>
        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <p>© 2026 PawHaven Pet Shop. All rights reserved.</p>
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
