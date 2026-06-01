import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/style.css';

const sellers = [
  { emoji: '🐶', name: 'Happy Paws Store',  location: 'New York, NY · Since 2018',    rating: '★★★★★ 4.9 (128 reviews)', desc: 'Specializing in dogs and puppies. All pets come with health certificates and vaccination records.' },
  { emoji: '🐱', name: 'Kitty Kingdom',     location: 'Los Angeles, CA · Since 2019', rating: '★★★★★ 4.8 (95 reviews)',  desc: 'Premium cat breeder with over 20 breeds. Kittens are socialized from birth for a smooth transition.' },
  { emoji: '🐾', name: 'PetWorld Central',  location: 'Chicago, IL · Since 2016',     rating: '★★★★☆ 4.7 (210 reviews)', desc: 'Multi-species pet store offering dogs, cats, birds, and small animals. Trusted by thousands of families.' },
  { emoji: '🐦', name: 'Feathered Friends', location: 'Austin, TX · Since 2020',      rating: '★★★★★ 4.9 (67 reviews)',  desc: 'Exotic and domestic bird specialists. Hand-raised birds that are tame and ready for your home.' },
  { emoji: '🐰', name: 'Bunny Burrow',      location: 'Seattle, WA · Since 2021',     rating: '★★★★★ 5.0 (42 reviews)',  desc: 'Dedicated rabbit and small animal breeder. All animals are litter-trained and vet-checked.' },
  { emoji: '🐕', name: 'Golden Breeds Co.', location: 'Miami, FL · Since 2017',       rating: '★★★★☆ 4.6 (183 reviews)', desc: 'Premium dog breeder specializing in Golden Retrievers, Labradors, and Poodles.' },
];

function SellersPage() {
  return (
    <>
      <Navbar />

      <div className="page-header">
        <h1>Our Trusted Sellers 🏪</h1>
        <p>All sellers are verified and reviewed to ensure the best experience for you and your pet.</p>
      </div>

      <section className="seller-section">
        <div className="section-title">
          <h2>Featured Sellers</h2>
          <p>Browse our top-rated pet sellers</p>
        </div>
        <div className="seller-grid">
          {sellers.map(s => (
            <div className="seller-card" key={s.name}>
              <div className="seller-header">
                <div className="seller-avatar">{s.emoji}</div>
                <div className="seller-info">
                  <h3>{s.name}</h3>
                  <p>{s.location}</p>
                </div>
              </div>
              <div className="seller-rating">{s.rating}</div>
              <p>{s.desc}</p>
              <Link to="/contact" className="btn btn-primary">Contact Seller</Link>
            </div>
          ))}
        </div>

        <div className="seller-cta">
          <h2>Want to Sell on PawHaven?</h2>
          <p>Join our community of trusted sellers and reach thousands of pet lovers. It's free to get started.</p>
          <Link to="/addpet" className="btn btn-primary">Become a Seller</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SellersPage;
