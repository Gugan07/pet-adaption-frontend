import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';
import API_BASE from './api';

function AddPetPage() {
  const [form, setForm] = useState({
    petName: '',
    species: '',
    breed: '',
    age: '',
    gender: '',
    listingType: '',
    price: '',
    location: '',
    description: '',
    imageUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/pets`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) { const d = await res.json(); alert(d.message); return; }
      setSubmitted(true);
      setForm({ petName: '', species: '', breed: '', age: '', gender: '', listingType: '', price: '', location: '', description: '', imageUrl: '' });
    } catch {
      alert('Server error. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>List Your Pet 🐾</h1>
        <p>Fill in the details below to add your pet to our adoption or sale listings.</p>
      </div>

      <div className="addpet-wrapper">
        <div className="form-card">
          <h2>Pet Details</h2>
          <p className="form-subtitle">All fields are required to create a listing.</p>

          {submitted && (
            <p style={{ color: 'green', textAlign: 'center', marginBottom: '16px', fontSize: '14px' }}>
              ✅ Pet listing submitted successfully!
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Pet Name</label>
                <input type="text" name="petName" placeholder="e.g. Buddy" value={form.petName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Species</label>
                <select name="species" value={form.species} onChange={handleChange} required>
                  <option value="">Select species</option>
                  <option>Dog</option>
                  <option>Cat</option>
                  <option>Bird</option>
                  <option>Rabbit</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Breed</label>
                <input type="text" name="breed" placeholder="e.g. Golden Retriever" value={form.breed} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="text" name="age" placeholder="e.g. 2 years" value={form.age} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange} required>
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Listing Type</label>
                <select name="listingType" value={form.listingType} onChange={handleChange} required>
                  <option value="">Select type</option>
                  <option>Adoption (Free)</option>
                  <option>For Sale</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Price (leave blank if free)</label>
              <input type="number" name="price" placeholder="e.g. 150" value={form.price} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" placeholder="City, State" value={form.location} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Pet Description</label>
              <textarea name="description" placeholder="Describe your pet's personality, health status, vaccinations, etc." value={form.description} onChange={handleChange} required></textarea>
            </div>
            <div className="form-group">
              <label>Pet Image URL</label>
              <input type="url" name="imageUrl" placeholder="https://example.com/pet-photo.jpg" value={form.imageUrl} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px' }}>
              Submit Listing
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddPetPage;
