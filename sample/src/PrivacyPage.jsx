import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function PrivacyPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Privacy Policy 🔒</h1>
        <p>Last updated: January 1, 2026</p>
      </div>

      <section className="policy-section">
        <p>At PetSphere, we are committed to protecting your personal information and your right to privacy.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us when you:</p>
        <ul>
          <li>Create an account (name, email, password)</li>
          <li>Submit an adoption or listing form</li>
          <li>Contact our support team</li>
          <li>Browse our website (usage data, cookies)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process adoption requests and seller verifications</li>
          <li>Send you updates and notifications (with your consent)</li>
          <li>Respond to your comments and questions</li>
          <li>Monitor and analyze usage trends</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul>
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect the rights and safety of PetSphere and its users</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data. No method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password.</p>

        <h2>5. Cookies</h2>
        <p>We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.</p>

        <h2>6. Your Rights</h2>
        <p>You have the right to access, update, or delete your personal information at any time. To exercise these rights, contact us at hello@petsphere.com.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please <Link to="/contact" style={{ color: 'var(--primary)' }}>contact us</Link>.</p>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPage;
