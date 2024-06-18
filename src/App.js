// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Gallery from './Components/Gallery';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Testimonials from './Components/Testimonials';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './Components/customStyles.css';
import 'bulma/css/bulma.min.css';
import Contact from './Components/Contact';
import Projects from './Components/Projects';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/gallery" Component={Gallery} />
          <Route path="/portfolio" Component={Portfolio} />
          <Route path="/team" Component={Team} />
          <Route path="/testimonials" Component={Testimonials} />
          <Route path="/services" Component={Services} />
          <Route path="/blog" Component={Blog} />
          <Route path='/contact' Component={Contact} />
          <Route path='/projects' Component={Projects} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
