import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';
import API_BASE from './api';

const filters = ['All Pets', '🐶 Dogs', '🐱 Cats', '🐰 Rabbits', '🐦 Birds'];

function AdoptionPage() {
  const [active, setActive] = useState('All Pets');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [adopted, setAdopted] = useState({});
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE}/pets`)
      .then(r => r.json())
      .then(d => { setPets(d.data || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleAdopt = async (pet) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) { navigate('/login'); return; }

    try {
      const res = await fetch(`${API_BASE}/adoption`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petId: pet._id, userId: user._id, message: '' }),
      });
      const data = await res.json();
      if (res.ok) {
        setAdopted(prev => ({ ...prev, [pet._id]: true }));
      } else {
        setError(prev => ({ ...prev, [pet._id]: data.message }));
      }
    } catch {
      setError(prev => ({ ...prev, [pet._id]: 'Server error. Try again.' }));
    }
  };

  const filtered = pets.filter(p => {
    if (active === 'All Pets') return true;
    if (active === '🐶 Dogs') return p.species === 'Dog';
    if (active === '🐱 Cats') return p.species === 'Cat';
    if (active === '🐰 Rabbits') return p.species === 'Rabbit';
    if (active === '🐦 Birds') return p.species === 'Bird';
    return true;
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

        {loading ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 0' }}>Loading pets...</p>
        ) : (
          <div className="card-container">
            {filtered.length > 0 ? filtered.map(pet => (
              <div className="card" key={pet._id}>
                {pet.imageUrl && <img src={pet.imageUrl} alt={pet.petName} />}
                <div className="card-content">
                  <span className="card-badge">{pet.species}</span>
                  <h3>{pet.petName}</h3>
                  <div className="pet-meta">
                    <span className="pet-tag">🎂 {pet.age}</span>
                    <span className="pet-tag">{pet.gender}</span>
                    <span className="pet-tag">📍 {pet.location}</span>
                  </div>
                  <p>{pet.breed}</p>

                  {adopted[pet._id] ? (
                    <div style={{ background: '#f0fdf4', color: '#16a34a', borderRadius: '10px', padding: '10px', fontSize: '14px', fontWeight: '600' }}>
                      ✅ Adoption request submitted!
                    </div>
                  ) : (
                    <>
                      {error[pet._id] && (
                        <p style={{ color: 'red', fontSize: '13px', marginBottom: '8px' }}>{error[pet._id]}</p>
                      )}
                      <button className="btn btn-primary" onClick={() => handleAdopt(pet)}>
                        Adopt {pet.petName}
                      </button>
                    </>
                  )}
                </div>
              </div>
            )) : (
              <p style={{ color: 'var(--muted)', textAlign: 'center', width: '100%', padding: '40px 0' }}>
                No pets available in this category yet. <Link to="/addpet">Add one!</Link>
              </p>
            )}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default AdoptionPage;
