// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
      <p>
            <strong>Interior Designs</strong> by <a href="https://initializ.ai">Initializ Labs.</a>. 
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
