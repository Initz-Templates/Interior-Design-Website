// src/components/Testimonials.js
import React from 'react';
// import testimonialData from '../data/testimonialData';
import './animations.css'; // Ensure animations.css is in your styles folder
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Testimonials = () => {

    const testimonialData = [
        {
          id: 1,
          text: 'Working with Interior Designs was a pleasure. They transformed our home beyond our expectations.',
          author: 'Sarah Johnson'
        },
        {
          id: 2,
          text: 'Professionalism and creativity define Interior Designs. Highly recommended!',
          author: 'David Smith'
        },
        {
          id: 3,
          text: 'From concept to execution, they delivered excellence in every detail. Truly impressive.',
          author: 'Emily Brown'
        },
        // Add more testimonials as needed
      ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Testimonials</h2>
        {testimonialData.map((testimonial) => (
          <div key={testimonial.id} className="box fade-in-up">
            <p>{testimonial.text}</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
<div className="has-text-centered">
          <Link to="/" className="button is-primary fade-in-up">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
