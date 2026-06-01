import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

const pets = [
  { name: 'Charlie', type: 'Dog', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=400', age: '2 Years', gender: '♂ Male', location: 'New York', breed: 'Labrador · Playful & friendly' },
  { name: 'Milo',    type: 'Cat', img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=400', age: '1 Year',  gender: '♂ Male', location: 'Boston',   breed: 'Tabby Cat · Calm & cuddly' },
  { name: 'Max',     type: 'Dog', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=400', age: '3 Years', gender: '♂ Male', location: 'Chicago',  breed: 'German Shepherd · Loyal & smart' },
  { name: 'Bella',   type: 'Cat', img: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=400', age: '2 Years', gender: '♀ Female', location: 'Austin', breed: 'Siamese Cat · Playful & vocal' },
  { name: 'Daisy',   type: 'Dog', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=400', age: '1 Year',  gender: '♀ Female', location: 'Seattle', breed: 'Beagle · Energetic & sweet' },
  { name: 'Cleo',    type: 'Cat', img: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=400', age: '4 Years', gender: '♀ Female', location: 'Miami',  breed: 'Persian Cat · Gentle & loving' },
];

const filters = ['All Pets', '🐶 Dogs', '🐱 Cats', '🐰 Rabbits', '🐦 Birds'];

function AdoptionPage() {
  const [active, setActive] = useState('All Pets');

  const filtered = pets.filter(p => {
    if (active === 'All Pets') return true;
    if (active === '🐶 Dogs') return p.type === 'Dog';
    if (active === '🐱 Cats') return p.type === 'Cat';
    return false;
  });

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Adopt a Pet 🐶🐱</h1>
        <p>Every pet here is waiting for a loving forever home. Find your perfect match.</p>
      </div>

      <section className="pets">
        <div className="adoption-filters">
          {filters.map(f => (
            <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
        <div className="card-container">
          {filtered.length > 0 ? filtered.map(pet => (
            <div className="card" key={pet.name}>
              <img src={pet.img} alt={pet.name} />
              <div className="card-content">
                <span className="card-badge">{pet.type}</span>
                <h3>{pet.name}</h3>
                <div className="pet-meta">
                  <span className="pet-tag">🎂 {pet.age}</span>
                  <span className="pet-tag">{pet.gender}</span>
                  <span className="pet-tag">📍 {pet.location}</span>
                </div>
                <p>{pet.breed}</p>
                <Link to="/login" className="btn btn-primary">Adopt {pet.name}</Link>
              </div>
            </div>
          )) : (
            <p style={{ color: 'var(--muted)', textAlign: 'center', width: '100%', padding: '40px 0' }}>No pets available in this category yet.</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AdoptionPage;
