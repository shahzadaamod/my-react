import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About Page</h2>
      <p>About us...</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default About;
