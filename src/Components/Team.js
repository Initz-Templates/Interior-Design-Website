// src/components/Team.js
import React from 'react';
// import teamData from '../data/teamData';
import './animations.css'; // Ensure animations.css is in your styles folder
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

const Team = () => {

    const teamData = [
        {
          id: 1,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtadGP1hZYiB8hUNTPz_-4ajD2Ye36PaGMHQ&s',
          name: 'John Doe',
          position: 'Lead Interior Designer',
          bio: 'John is passionate about creating functional and beautiful spaces.'
        },
        {
          id: 2,
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJWo8oV4m-oIEYTRy0myNKr7RwS_Gh9hC6Og&s',
          name: 'Jane Smith',
          position: 'Senior Architect',
          bio: 'Jane specializes in integrating architecture and interior design seamlessly.'
        },
        {
          id: 3,
          imageUrl: 'https://compote.slate.com/images/2cf51654-c176-4c20-b7fd-14f908ab80cd.jpg',
          name: 'Michael Johnson',
          position: 'Project Manager',
          bio: 'Michael ensures projects are completed on time and within budget.'
        },
        // Add more team members as needed
      ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Our Team</h2>
        <div className="columns is-multiline">
          {teamData.map((member) => (
            <div key={member.id} className="column is-one-third fade-in-up">
              <div className="box">
                <figure className="image">
                  <img src={member.imageUrl} alt={member.name} />
                </figure>
                <h3 className="title is-4">{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.bio}</p>
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

export default Team;
