import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className='landingPage'>
      <h1 className='title'>Welcome to Petful</h1>
      <p className='landingBox'>
        Our goal is to make the adoption process easier. Simply choose a dog or
        a cat, and the first available pet will be available for you to adopt in
        a first come first serve manner.
      </p>
      <Link to={'/adopt'}>Adopt a pet today!</Link>
    </section>
  );
}

export default LandingPage;
