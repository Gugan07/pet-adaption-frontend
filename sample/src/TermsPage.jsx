import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function TermsPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Terms &amp; Conditions 📄</h1>
        <p>Last updated: January 1, 2026. Please read these terms carefully before using PawHaven.</p>
      </div>

      <section className="policy-section">
        <p>By accessing or using PawHaven, you agree to be bound by these Terms and Conditions.</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By creating an account or using any part of our service, you confirm that you are at least 18 years old and agree to these terms.</p>

        <h2>2. User Accounts</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
        <ul>
          <li>Provide accurate and truthful information</li>
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorized account access</li>
          <li>Not share your account with others</li>
        </ul>

        <h2>3. Adoption Policy</h2>
        <p>Users who adopt pets through PawHaven agree to:</p>
        <ul>
          <li>Provide a safe, loving, and appropriate home environment</li>
          <li>Not resell or transfer the pet without notifying PawHaven</li>
          <li>Complete all required adoption paperwork honestly</li>
          <li>Contact us if they are unable to care for the pet</li>
        </ul>

        <h2>4. Seller Responsibilities</h2>
        <p>Sellers on PawHaven must:</p>
        <ul>
          <li>Provide accurate descriptions and health information for all listed pets</li>
          <li>Ensure all pets are vaccinated and health-checked before listing</li>
          <li>Not list pets obtained through illegal means</li>
          <li>Respond to buyer inquiries in a timely manner</li>
        </ul>

        <h2>5. Prohibited Activities</h2>
        <ul>
          <li>Post false, misleading, or fraudulent listings</li>
          <li>Engage in animal cruelty or illegal pet trade</li>
          <li>Harass, threaten, or harm other users</li>
          <li>Attempt to hack or disrupt our platform</li>
        </ul>

        <h2>6. Limitation of Liability</h2>
        <p>PawHaven acts as a platform connecting buyers and sellers. We are not responsible for the actions of individual users.</p>

        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of PawHaven after changes constitutes acceptance of the new terms.</p>

        <h2>8. Contact</h2>
        <p>For questions about these terms, <Link to="/contact" style={{ color: 'var(--primary)' }}>contact us</Link>.</p>
      </section>

      <Footer />
    </>
  );
}

export default TermsPage;
