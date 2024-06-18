// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Custom CSS file for additional styling

const Header = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item navbar-item-bold">
            Interior Designs
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/gallery" className="navbar-item">
              Gallery
            </Link>
            <Link to="/portfolio" className="navbar-item">
              Portfolio
            </Link>
            <Link to="/team" className="navbar-item">
              Our Team
            </Link>
            <Link to="/testimonials" className="navbar-item">
              Testimonials
            </Link>
            <Link to="/services" className="navbar-item">
              Services
            </Link>
            <Link to="/blog" className="navbar-item">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
