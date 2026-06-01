import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

function AddPetPage() {
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
          <form>
            <div className="form-row">
              <div className="form-group"><label>Pet Name</label><input type="text" placeholder="e.g. Buddy" /></div>
              <div className="form-group">
                <label>Species</label>
                <select><option value="">Select species</option><option>Dog</option><option>Cat</option><option>Bird</option><option>Rabbit</option><option>Other</option></select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>Breed</label><input type="text" placeholder="e.g. Golden Retriever" /></div>
              <div className="form-group"><label>Age</label><input type="text" placeholder="e.g. 2 years" /></div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select><option value="">Select gender</option><option>Male</option><option>Female</option></select>
              </div>
              <div className="form-group">
                <label>Listing Type</label>
                <select><option value="">Select type</option><option>Adoption (Free)</option><option>For Sale</option></select>
              </div>
            </div>
            <div className="form-group"><label>Price (leave blank if free)</label><input type="number" placeholder="e.g. 150" /></div>
            <div className="form-group"><label>Location</label><input type="text" placeholder="City, State" /></div>
            <div className="form-group"><label>Pet Description</label><textarea placeholder="Describe your pet's personality, health status, vaccinations, etc."></textarea></div>
            <div className="form-group"><label>Pet Image URL</label><input type="url" placeholder="https://example.com/pet-photo.jpg" /></div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', fontSize: '16px' }}>Submit Listing</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AddPetPage;
