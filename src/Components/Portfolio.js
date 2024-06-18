// src/components/Portfolio.js
import React from 'react';
// import portfolioData from '../data/portfolioData';
import './animations.css'; // Ensure animations.css is in your styles folder
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const portfolioData = [
        {
          id: 1,
          imageUrl: 'https://c4.wallpaperflare.com/wallpaper/550/125/107/picture-modern-living-room-interior-design-wallpaper-preview.jpg',
          title: 'Modern Living Room',
          description: 'A sleek and minimalist design for a modern living room.'
        },
        {
          id: 2,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkSjtDGihrq0hCCT7UeIDZBaFtuXJvgjMFhw&s',
          title: 'Rustic Kitchen',
          description: 'Cozy and warm rustic kitchen with natural wood accents.'
        },
        {
          id: 3,
          imageUrl: 'https://c0.wallpaperflare.com/preview/706/275/827/bedroom-interior-design-style.jpg',
          title: 'Luxury Bedroom',
          description: 'Elegant and luxurious bedroom design with plush furnishings.'
        },
        // Add more portfolio items as needed
      ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Portfolio</h2>
        <div className="columns is-multiline">
          {portfolioData.map((item) => (
            <div key={item.id} className="column is-half fade-in-up">
              <div className="box">
                <figure className="image">
                  <img src={item.imageUrl} alt={item.title} />
                </figure>
                <h3 className="title is-4">{item.title}</h3>
                <p>{item.description}</p>
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

export default Portfolio;
