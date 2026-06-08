import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function HomePage() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🐶 Trusted Pet Adoption Platform</div>
          <h2>Find Your <span>Perfect</span><br />Furry Friend</h2>
          <p>Connect with loving pets waiting for a forever home.<br />Adopt, don't shop — change a life today.</p>
          <div className="hero-btns">
            <Link to="/adoption" className="btn btn-primary">Browse Pets</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item"><h3>1,200+</h3><p>Pets Adopted</p></div>
        <div className="stat-item"><h3>350+</h3><p>Trusted Sellers</p></div>
        <div className="stat-item"><h3>50+</h3><p>Breeds Available</p></div>
        <div className="stat-item"><h3>98%</h3><p>Happy Families</p></div>
      </section>

      <section className="pets">
        <div className="section-title">
          <h2>Featured Pets</h2>
          <p>Meet some of our adorable pets looking for a loving home</p>
        </div>
        <div className="card-container">
          {[
            { name: 'Buddy', type: 'Dog', desc: 'Golden Retriever · 2 yrs · Male', img: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400' },
            { name: 'Luna',  type: 'Cat', desc: 'Persian Cat · 1 yr · Female',     img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=400' },
            { name: 'Rocky', type: 'Dog', desc: 'Beagle · 3 yrs · Male',           img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400' },
          ].map(pet => (
            <div className="card" key={pet.name}>
              <img src={pet.img} alt={pet.name} />
              <div className="card-content">
                <span className="card-badge">{pet.type}</span>
                <h3>{pet.name}</h3>
                <p>{pet.desc}</p>
                <Link to="/adoption" className="btn btn-primary">Adopt {pet.name}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="section-title">
          <h2>Why Choose PetSphere?</h2>
          <p>We make pet adoption safe, easy, and joyful</p>
        </div>
        <div className="features-grid">
          {[
            { icon: '🏠', title: 'Safe Adoption',    desc: 'Every pet is health-checked and vaccinated before listing.' },
            { icon: '✅', title: 'Verified Sellers', desc: 'All sellers are verified and reviewed by our team.' },
            { icon: '💬', title: '24/7 Support',     desc: 'Our team is always here to help you through the process.' },
            { icon: '❤️', title: 'Happy Families',   desc: 'Over 1,200 successful adoptions and counting.' },
          ].map(f => (
            <div className="feature-item" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
