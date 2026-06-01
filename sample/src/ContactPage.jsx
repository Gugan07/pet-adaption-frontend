import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function ContactPage() {
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
            { icon: '📍', title: 'Our Address',    text: '123 Pet Street, Animal City, NY 10001' },
            { icon: '📞', title: 'Phone Number',   text: '+1 (555) 123-4567' },
            { icon: '✉️', title: 'Email Address',  text: 'hello@pawhaven.com' },
            { icon: '🕐', title: 'Working Hours',  text: 'Mon – Fri: 9am – 6pm | Sat: 10am – 4pm' },
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
          <form>
            <div className="form-row">
              <div className="form-group"><label>First Name</label><input type="text" placeholder="John" /></div>
              <div className="form-group"><label>Last Name</label><input type="text" placeholder="Doe" /></div>
            </div>
            <div className="form-group"><label>Email Address</label><input type="email" placeholder="john@example.com" /></div>
            <div className="form-group"><label>Subject</label><input type="text" placeholder="How can we help?" /></div>
            <div className="form-group"><label>Message</label><textarea placeholder="Write your message here..."></textarea></div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px' }}>Send Message</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ContactPage;
