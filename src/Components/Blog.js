// src/components/Blog.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './animations.css'; // Ensure animations.css is in your styles folder
import 'bulma/css/bulma.min.css';

// Mock data for blog posts (example images used)
const blogData = [
  {
    id: 1,
    title: '10 Tips for Decorating Small Spaces',
    imageUrl: 'https://media.architecturaldigest.com/photos/593f031c5fde8524b244e73d/master/w_1600%2Cc_limit/ashley-darryl-noora-raj-brown-west-village-4.jpg',
    description: 'Discover practical tips to maximize space and style in small rooms.',
    author: 'Sarah Johnson',
    date: 'June 1, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    `
  },
  {
    id: 2,
    title: 'Creating a Harmonious Color Scheme for Your Home',
    imageUrl: 'https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/02/02182037/cover-6-1.jpg',
    description: 'Learn how to choose and combine colors to create a cohesive look.',
    author: 'David Smith',
    date: 'June 15, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    `
  },
  {
    id: 3,
    title: 'Top Trends in Modern Interior Design',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/hbx060118wooden03-660d6e158aa22.jpg?crop=1xw:0.8434883720930233xh;center,top&resize=1200:*',
    description: 'Explore the latest trends shaping modern interior design in 2024.',
    author: 'Emily Brown',
    date: 'June 30, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    `
  },
  {
    id: 4,
    title: 'Incorporating Smart Home Technology',
    imageUrl: 'https://media.architecturaldigest.com/photos/56ec5e48dc71add34a963508/master/w_1600%2Cc_limit/ashley-darryl-new-york-apartment-001.jpg',
    description: 'Discover how to integrate smart home technology seamlessly into your design.',
    author: 'Michael Johnson',
    date: 'July 10, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    `
  },
  {
    id: 5,
    title: 'Choosing the Right Flooring for Every Room',
    imageUrl: 'https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2018/07/cozy-room.jpg?w=336&ssl=1',
    description: 'A guide to selecting flooring materials that match your style and needs.',
    author: 'Emma Wilson',
    date: 'July 25, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
    `
  },
  // Add more blog posts as needed
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  // Function to handle click on a blog post
  const handleOpenModal = (postId) => {
    const post = blogData.find(item => item.id === postId);
    setExpandedPost(post);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setExpandedPost(null);
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="title fade-in-up">Blogs</h2>
        <div className="columns is-multiline">
          {blogData.map((post) => (
            <div key={post.id} className="column is-half fade-in-up">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img src={post.imageUrl} alt={post.title} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{post.title}</strong>
                        <br />
                        {post.description}
                      </p>
                      <p>
                        <small>By {post.author} | {post.date}</small>
                      </p>
                      {/* Button to open modal */}
                      <button className="button is-primary" onClick={() => handleOpenModal(post.id)}>
                        Read More
                      </button>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for displaying full blog content */}
        {expandedPost && (
          <div className="modal is-active">
            <div className="modal-background" onClick={handleCloseModal}></div>
            <div className="modal-content">
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-128x128">
                      <img src={expandedPost.imageUrl} alt={expandedPost.title} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{expandedPost.title}</strong>
                        <br />
                        {expandedPost.content}
                      </p>
                      <p>
                        <small>By {expandedPost.author} | {expandedPost.date}</small>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <button className="modal-close is-large" aria-label="close" onClick={handleCloseModal}></button>
          </div>
        )}

        <Link to="/" className="button is-primary fade-in-up">Back to Home</Link>
      </div>
    </section>
  );
};

export default Blog;
