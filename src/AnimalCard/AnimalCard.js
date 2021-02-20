import React, { Component } from 'react';
import './AnimalCard.css';

class AnimalCard extends Component {
  static defaultProps = {
    pet: {
      age: '',
      breed: '',
      description: '',
      gender: '',
      imageURL: '',
      name: '',
      story: '',
    },
  };
  render() {
    return <div className="petCard">
        <h3>Pet Name</h3>
        <p>Image</p>
        <div>
            <p>Age</p>
            <p>Breed</p>
            <p>Gender</p>
            <p>Description</p>
            <p>Story</p>
        </div>
        <button>Adopt</button>
    </div>;
  }
}

export default AnimalCard;
