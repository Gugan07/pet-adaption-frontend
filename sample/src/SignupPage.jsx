import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import './css/style.css';
import API_BASE from './api';

function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstname: form.firstName,
          lastname: form.lastName,
          email: form.email,
          password: form.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message); return; }
      alert('Account created successfully! ✅');
      navigate('/login');
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
          <p className="auth-subtitle">Create your free account today.</p>

          {error && (
            <p style={{ color: 'red', textAlign: 'center', marginBottom: '14px', fontSize: '14px' }}>
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" placeholder="Doe" value={form.lastName} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" name="username" placeholder="johndoe123" value={form.username} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Create a strong password" value={form.password} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Repeat your password" value={form.confirmPassword} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Create Account</button>
          </form>

          <div className="divider">or</div>
          <div className="form-link">Already have an account? <Link to="/login">Login here</Link></div>
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

export default SignupPage;
