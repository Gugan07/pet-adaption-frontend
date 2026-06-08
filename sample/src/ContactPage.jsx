import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';
import API_BASE from './api';

function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) { const d = await res.json(); alert(d.message); return; }
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch {
      alert('Server error. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Get In Touch 💬</h1>
        <p>Have a question? We'd love to hear from you. Send us a message and we'll respond shortly.</p>
      </div>

      <div className="contact-section">
        <div className="contact-info">
          <h2>We're Here to Help</h2>
          <p>Whether you have questions about adoption, sellers, or anything else — our team is ready to assist you every step of the way.</p>
          {[
            { icon: '📍', title: 'Our Address',   text: '123 Pet Street, Animal City, NY 10001' },
            { icon: '📞', title: 'Phone Number',  text: '+1 (555) 123-4567' },
            { icon: '✉️', title: 'Email Address', text: 'hello@petsphere.com' },
            { icon: '🕐', title: 'Working Hours', text: 'Mon – Fri: 9am – 6pm | Sat: 10am – 4pm' },
          ].map(item => (
            <div className="contact-item" key={item.title}>
              <div className="contact-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="form-card">
          <h2>Send a Message</h2>

          {submitted && (
            <p style={{ color: 'green', textAlign: 'center', marginBottom: '16px', fontSize: '14px' }}>
              ✅ Message sent! We'll get back to you soon.
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
              <label>Email Address</label>
              <input type="email" name="email" placeholder="john@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" placeholder="How can we help?" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" placeholder="Write your message here..." value={form.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
