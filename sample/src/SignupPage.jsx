import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './css/style.css';

function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-logo"><span>🐾</span> PawHaven</div>
          <p className="auth-subtitle">Create your free account today.</p>
          <form>
            <div className="form-row">
              <div className="form-group"><label>First Name</label><input type="text" placeholder="John" /></div>
              <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
            </div>
            <div className="form-group"><label>Username</label><input type="text" placeholder="johndoe123" /></div>
            <div className="form-group"><label>Email Address</label><input type="email" placeholder="you@example.com" /></div>
            <div className="form-group"><label>Password</label><input type="password" placeholder="Create a strong password" /></div>
            <div className="form-group"><label>Confirm Password</label><input type="password" placeholder="Repeat your password" /></div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>
          <div className="divider">or</div>
          <div className="form-link">Already have an account? <Link to="/login">Login here</Link></div>
        </div>
      </div>
      <footer>
        <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
          <p>© 2026 PawHaven Pet Shop. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default SignupPage;
