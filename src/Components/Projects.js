// src/components/OurProjects.js
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Modern Apartments',
    description: 'We have transformed numerous modern apartments into luxurious living spaces with a contemporary touch.',
    image: 'https://c4.wallpaperflare.com/wallpaper/1021/547/589/reflection-modern-picture-design-wallpaper-preview.jpg',
  },
  {
    id: 2,
    title: 'Cozy Homes',
    description: 'Our cozy home projects focus on creating warm, inviting atmospheres that make every house feel like a home.',
    image: 'https://t4.ftcdn.net/jpg/05/89/57/51/360_F_589575189_oReHF2FUAoAIZnLzD9uaVjuZUkmB9K83.jpg',
  },
  {
    id: 3,
    title: 'Corporate Offices',
    description: 'We design corporate offices that are both professional and inspiring, enhancing productivity and creativity.',
    image: 'https://wallpapers.com/images/featured/hd-office-background-wwmb5ymdbjbjv689.jpg',
  },
  {
    id: 4,
    title: 'Rustic Retreats',
    description: 'Escape to our rustic retreats, where natural materials and serene environments create a tranquil getaway.',
    image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324',
  },
  {
    id: 5,
    title: 'Urban Lofts',
    description: 'Explore our urban lofts, where industrial elements blend with modern design for a chic city living experience.',
    image: 'https://images.adsttc.com/media/images/5c05/9a52/08a5/e5e6/c000/029f/newsletter/BUREAU_FRAAI_STARTSMART_URBAN_LOFTS-04.jpg?1543870986',
  },
  {
    id: 6,
    title: 'Beachfront Villas',
    description: 'Experience luxury in our beachfront villas, where breathtaking views and sophisticated design meet.',
    image: 'https://media.inspiringvillas.com/prd/upload/property/villa-hin-choeng-mon-beach-koh-samui1568214645095.jpeg',
  },
];

const Projects = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Our Projects</h2>
        <div className="columns is-multiline">
          {projects.map((project) => (
            <div key={project.id} className="column is-4-desktop is-12-tablet fade-in-up">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={project.image} alt={project.title} />
                  </figure>
                </div>
                <div className="card-content">
                  <h3 className="title is-4">{project.title}</h3>
                  <p>{project.description}</p>
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

export default Projects;
