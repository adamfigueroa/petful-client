import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import AdoptPage from '../AdoptPage/AdoptPage';

function Root() {
  return (
    <div>
      <Route path={'/'} exact component={LandingPage} />
      <Route path={'/adopt'} component={AdoptPage} />
    </div>
  );
}

export default Root;
