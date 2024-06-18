import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './animations.css';
import './Home.css'; // Custom CSS for additional styling

const Home = () => {
  
  const projectBoxStyle = {
    backgroundColor: '#2a3b4c',
    padding: '20px',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  return (
    <div className="home">
      {/* Welcome Section */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="title slide-in-left">Welcome to Interior Designs</h1>
              <p className="subtitle slide-in-left">Discover inspiring home interiors that blend style and functionality.</p>
              <Link to="/gallery" className="button is-primary slide-in-left">View Gallery</Link>
            </div>
            <div className="column is-half">
              <figure className="image fade-in-scale">
                <img src="https://images5.alphacoders.com/134/1347174.png" alt="Interior Design Example" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section">
        <div className="container">
          <h2 className="title fade-in-up has-text-centered">About Us</h2>
          <p className="fade-in-up has-text-centered">
            At Interior Designs, we believe that a well-designed space can transform lives. Our team of experienced designers work closely with clients to create beautiful, functional spaces that reflect their unique style and needs. Whether you're looking to redesign your home or office, we are here to help you every step of the way. Our approach combines creativity with practicality to ensure that every project is both visually stunning and highly functional.
          </p>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="section">
        <div className="container">
          <h2 className="title fade-in-up">Our Projects</h2>
          <div className="columns is-multiline">
            <div className="column is-4-desktop is-12-tablet fade-in-up">
              <div style={projectBoxStyle}>
                <h3 className="title is-4">Modern Apartments</h3>
                <p>We have transformed numerous modern apartments into luxurious living spaces with a contemporary touch.</p>
              </div>
            </div>
            <div className="column is-4-desktop is-12-tablet fade-in-up">
              <div style={projectBoxStyle}>
                <h3 className="title is-4">Cozy Homes</h3>
                <p>Our cozy home projects focus on creating warm, inviting atmospheres that make every house feel like a home.</p>
              </div>
            </div>
            <div className="column is-4-desktop is-12-tablet fade-in-up">
              <div style={projectBoxStyle}>
                <h3 className="title is-4">Corporate Offices</h3>
                <p>We design corporate offices that are both professional and inspiring, enhancing productivity and creativity.</p>
              </div>
            </div>
          </div>
          <Link to="/projects" className="button is-primary fade-in-up">View More Projects</Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 className="title fade-in-up has-text-centered">Testimonials</h2>
          <div className="columns">
            <div className="column fade-in-up">
              <blockquote className="box">
                "Interior Designs completely transformed our home. Their attention to detail and creative vision is unparalleled."
                <br /> - Jane Doe
              </blockquote>
            </div>
            <div className="column fade-in-up">
              <blockquote className="box">
                "The team at Interior Designs was professional, responsive, and a pleasure to work with. Highly recommend!"
                <br /> - John Smith
              </blockquote>
            </div>
            <div className="column fade-in-up">
              <blockquote className="box">
                "Our new office space is both functional and stylish, thanks to the talented designers at Interior Designs."
                <br /> - Sarah Lee
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section contact">
        <div className="container has-text-centered">
          <h2 className="title fade-in-up">Contact Us</h2>
          <p className="fade-in-up">
            Ready to start your design project? Get in touch with us today to schedule a consultation. We look forward to working with you to create a space you'll love.
          </p>
          <Link to="/contact" className="button is-primary fade-in-up">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
