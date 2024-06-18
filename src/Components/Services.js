// src/components/Services.js
import React from 'react';
import './animations.css'; // Ensure animations.css is in your styles folder
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Interior Design Consultation',
      description: 'Initial consultation to understand client needs and preferences.'
    },
    {
      id: 2,
      title: 'Custom Furniture Design',
      description: 'Design and fabrication of bespoke furniture pieces.'
    },
    {
      id: 3,
      title: 'Home Staging Services',
      description: 'Preparing homes for sale to enhance appeal to potential buyers.'
    },
    {
      id: 4,
      title: 'Color Consultation',
      description: 'Expert advice on choosing the right color schemes for interiors.'
    },
    {
      id: 5,
      title: 'Renovation Planning',
      description: 'Planning and project management for home renovation projects.'
    },
    // Add more services as needed
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Our Services</h2>
        <div className="columns is-multiline">
          {services.map(service => (
            <div key={service.id} className="column is-half fade-in-up">
              <div className="card service-card">
                <div className="card-content">
                  <h3 className="title is-4">{service.title}</h3>
                  <p>{service.description}</p>
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

export default Services;
