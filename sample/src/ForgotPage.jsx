import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './css/style.css';

function ForgotPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-logo"><span>🔑</span></div>
          <p className="auth-subtitle" style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text)', marginBottom: '6px' }}>
            Reset Password
          </p>
          <p className="auth-subtitle">Enter your email and we'll send you a reset link.</p>

          {submitted && (
            <p style={{ color: 'green', textAlign: 'center', marginBottom: '14px', fontSize: '14px' }}>
              ✅ Reset link sent! Check your inbox.
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
            <button type="submit" className="btn btn-primary">Send Reset Link</button>
          </form>

          <div className="form-link" style={{ marginTop: '20px' }}>
            Remembered your password? <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <p>© 2026 PetSphere Pet Shop. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default ForgotPage;
