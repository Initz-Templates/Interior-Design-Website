// src/components/Contact.js
import React from 'react';
import './animations.css';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Contact Us</h2>
        <form className="fade-in-up">
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input className="input" type="text" placeholder="Your Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input className="input" type="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea className="textarea" placeholder="Your Message"></textarea>
            </div>
          </div>
          <div className="control" style={{display:"flex", justifyContent:"space-between"}}>
            <button className="button is-primary">Send Message</button>
          <Link to="/" className="button is-primary fade-in-up">Back to Home</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
