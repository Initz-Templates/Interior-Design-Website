// src/components/Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import galleryData from '../data';
import './animations.css';
import 'bulma/css/bulma.min.css';

const Gallery = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Gallery</h2>
        <div className="columns is-multiline">
          {galleryData.map((item) => (
            <div key={item.id} className="column is-one-third fade-in-up">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.imageUrl} alt={item.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="has-text-centered">
          <Link to="/" className="button is-primary fade-in-up">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
