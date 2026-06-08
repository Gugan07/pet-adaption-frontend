import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>About PetSphere 🐾</h1>
        <p>We're on a mission to connect every pet with a loving forever home.</p>
      </div>

      <div className="about-grid">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&w=800" alt="Happy pets" />
        </div>
        <div className="about-text">
          <h2>Our <span>Story</span> &amp; Mission</h2>
          <p>PetSphere was founded in 2020 with a simple belief — every pet deserves a loving home. We started as a small local shelter and grew into a trusted platform connecting thousands of pet lovers with their perfect companions.</p>
          <p>We work with verified sellers, rescue centers, and individual pet owners to ensure every adoption is safe, transparent, and joyful.</p>
          <ul className="about-list">
            <li>All pets are health-checked and vaccinated</li>
            <li>Verified and reviewed seller profiles</li>
            <li>Dedicated post-adoption support team</li>
            <li>Transparent adoption process</li>
            <li>Community of 10,000+ happy pet owners</li>
          </ul>
          <Link to="/adoption" className="btn btn-primary">Browse Pets for Adoption</Link>
        </div>
      </div>

      <section className="stats">
        <div className="stat-item"><h3>2020</h3><p>Year Founded</p></div>
        <div className="stat-item"><h3>1,200+</h3><p>Pets Adopted</p></div>
        <div className="stat-item"><h3>350+</h3><p>Trusted Sellers</p></div>
        <div className="stat-item"><h3>10K+</h3><p>Happy Families</p></div>
      </section>

      <section className="team-section">
        <div className="section-title">
          <h2>Meet Our Team</h2>
          <p>Passionate people who love animals as much as you do</p>
        </div>
        <div className="team-grid">
          {[
            { name: 'Alex Johnson',   role: 'Founder & CEO',       img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },
            { name: 'Sarah Williams', role: 'Head of Adoptions',   img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200' },
            { name: 'Mike Chen',      role: 'Veterinary Advisor',  img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200' },
            { name: 'Emma Davis',     role: 'Customer Support',    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200' },
          ].map(m => (
            <div className="team-card" key={m.name}>
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;
