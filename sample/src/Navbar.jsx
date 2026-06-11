import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav>
      <div className="nav-logo"><Link to="/"><span>🐾</span> PetSphere</Link></div>
      <ul>
        <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/adoption" className={pathname === '/adoption' ? 'active' : ''}>Adoption</Link></li>
        <li><Link to="/sellers" className={pathname === '/sellers' ? 'active' : ''}>Sellers</Link></li>
        <li><Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        <li><Link to="/admin" className={pathname === '/admin' ? 'active' : ''}>Admin</Link></li>
        <li><Link to="/login" className={`btn-nav${pathname === '/login' ? ' active' : ''}`}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
