import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className="landingPage">
      <h1 className="title">Welcome to Petful</h1>
      <p className="landingBox">
        Our goal is to make the adoption process easier. When you are ready
        simply join the queue and once it is your turn you can choose a dog or
        cat to adopt!
      </p>
      <Link to={'/adopt'}>Adopt a pet today!</Link>
    </section>
  );
}

export default LandingPage;
