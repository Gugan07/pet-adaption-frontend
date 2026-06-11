import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';
import API_BASE from './api';

const API = API_BASE;

function AdminPage() {
  const [tab, setTab] = useState('adoptions');
  const [adoptions, setAdoptions] = useState([]);
  const [pets, setPets] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) { navigate('/login'); return; }
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    const [a, p, c, u] = await Promise.all([
      fetch(`${API}/adoption`).then(r => r.json()),
      fetch(`${API}/pets`).then(r => r.json()),
      fetch(`${API}/contact`).then(r => r.json()),
      fetch(`${API}/user`).then(r => r.json()),
    ]);
    setAdoptions(a.data || []);
    setPets(p.data || []);
    setContacts(c.data || []);
    setUsers(u.data || []);
    setLoading(false);
  };

  const updateAdoptionStatus = async (id, status) => {
    await fetch(`${API}/adoption/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setAdoptions(prev => prev.map(a => a._id === id ? { ...a, status } : a));
  };

  const deletePet = async (id) => {
    if (!window.confirm('Delete this pet?')) return;
    await fetch(`${API}/pets/${id}`, { method: 'DELETE' });
    setPets(prev => prev.filter(p => p._id !== id));
  };

  const deleteUser = async (id) => {
    if (!window.confirm('Delete this user?')) return;
    await fetch(`${API}/user/${id}`, { method: 'DELETE' });
    setUsers(prev => prev.filter(u => u._id !== id));
  };

  const deleteContact = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    await fetch(`${API}/contact/${id}`, { method: 'DELETE' });
    setContacts(prev => prev.filter(c => c._id !== id));
  };

  const statusColor = (s) => {
    if (s === 'approved') return { background: '#f0fdf4', color: '#16a34a' };
    if (s === 'rejected') return { background: '#fef2f2', color: '#dc2626' };
    return { background: '#fefce8', color: '#ca8a04' };
  };

  return (
    <>
      <Navbar />
      <div className="page-header">
        <h1>Admin Dashboard 🛠️</h1>
        <p>Manage adoption requests, pet listings, and contact messages.</p>
      </div>

      <div style={{ padding: '40px 60px' }}>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '24px', marginBottom: '36px', flexWrap: 'wrap' }}>
          {[
            { label: 'Total Pets', value: pets.length, icon: '🐾' },
            { label: 'Adoption Requests', value: adoptions.length, icon: '📋' },
            { label: 'Pending', value: adoptions.filter(a => a.status === 'pending').length, icon: '⏳' },
            { label: 'Messages', value: contacts.length, icon: '✉️' },
            { label: 'Users', value: users.length, icon: '👥' },
          ].map(s => (
            <div key={s.label} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px 32px', boxShadow: 'var(--shadow)', flex: '1', minWidth: '160px', textAlign: 'center' }}>
              <div style={{ fontSize: '32px' }}>{s.icon}</div>
              <div style={{ fontSize: '28px', fontWeight: '700', color: 'var(--primary)' }}>{s.value}</div>
              <div style={{ color: 'var(--muted)', fontSize: '14px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
          {['adoptions', 'pets', 'contacts', 'users'].map(t => (
            <button key={t} onClick={() => setTab(t)} className={`filter-btn${tab === t ? ' active' : ''}`} style={{ textTransform: 'capitalize' }}>
              {t === 'adoptions' ? '📋 Adoptions' : t === 'pets' ? '🐾 Pets' : t === 'contacts' ? '✉️ Messages' : '👥 Users'}
            </button>
          ))}
        </div>

        {loading ? (
          <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px' }}>Loading...</p>
        ) : (

          /* ── ADOPTIONS TAB ── */
          tab === 'adoptions' ? (
            adoptions.length === 0 ? (
              <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px' }}>No adoption requests yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {adoptions.map(a => (
                  <div key={a._id} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    {a.petId?.imageUrl && <img src={a.petId.imageUrl} alt={a.petId.petName} style={{ width: '70px', height: '70px', borderRadius: '12px', objectFit: 'cover' }} />}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '4px' }}>{a.petId?.petName || 'Unknown Pet'} <span style={{ color: 'var(--muted)', fontWeight: '400', fontSize: '14px' }}>({a.petId?.species})</span></h3>
                      <p style={{ color: 'var(--muted)', fontSize: '14px' }}>
                        👤 {a.userId?.firstname} {a.userId?.lastname} · {a.userId?.email}
                      </p>
                      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>📅 {new Date(a.createdAt).toLocaleDateString()}</p>
                    </div>
                    <span style={{ ...statusColor(a.status), padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: '600', textTransform: 'capitalize' }}>
                      {a.status}
                    </span>
                    {a.status === 'pending' && (
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '14px' }} onClick={() => updateAdoptionStatus(a._id, 'approved')}>✅ Approve</button>
                        <button className="btn" style={{ padding: '8px 18px', fontSize: '14px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca' }} onClick={() => updateAdoptionStatus(a._id, 'rejected')}>❌ Reject</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )

          /* ── PETS TAB ── */
          ) : tab === 'pets' ? (
            pets.length === 0 ? (
              <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px' }}>No pets listed yet.</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {pets.map(pet => (
                  <div key={pet._id} className="card">
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
                      <button className="btn" style={{ width: '100%', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', marginTop: '8px' }} onClick={() => deletePet(pet._id)}>🗑️ Remove Listing</button>
                    </div>
                  </div>
                ))}
              </div>
            )

          ) : tab === 'users' ? (
            users.length === 0 ? (
              <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px' }}>No users registered yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {users.map(u => (
                  <div key={u._id} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px', boxShadow: 'var(--shadow)', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>👤</div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{u.firstname} {u.lastname}</h3>
                      <p style={{ color: 'var(--muted)', fontSize: '14px' }}>✉️ {u.email}</p>
                      <p style={{ color: 'var(--muted)', fontSize: '13px' }}>🔖 Role: {u.role}</p>
                    </div>
                    <button className="btn" style={{ padding: '8px 18px', fontSize: '14px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', flexShrink: 0 }} onClick={() => deleteUser(u._id)}>🗑️ Delete</button>
                  </div>
                ))}
              </div>
            )

          /* ── CONTACTS TAB ── */
          ) : (
            contacts.length === 0 ? (
              <p style={{ color: 'var(--muted)', textAlign: 'center', padding: '40px' }}>No messages yet.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contacts.map(c => (
                  <div key={c._id} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '24px', boxShadow: 'var(--shadow)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{c.subject}</h3>
                        <p style={{ color: 'var(--muted)', fontSize: '14px' }}>👤 {c.firstName} {c.lastName} · {c.email}</p>
                        <p style={{ fontSize: '15px', marginTop: '10px', lineHeight: '1.7' }}>{c.message}</p>
                        <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '8px' }}>📅 {new Date(c.createdAt).toLocaleDateString()}</p>
                      </div>
                      <button className="btn" style={{ padding: '8px 18px', fontSize: '14px', background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', flexShrink: 0 }} onClick={() => deleteContact(c._id)}>🗑️ Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            )
          )
        )}
      </div>
      <Footer />
    </>
  );
}

export default AdminPage;
