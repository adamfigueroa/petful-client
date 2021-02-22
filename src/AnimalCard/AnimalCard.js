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
        <h2>{this.props.pet.name}</h2>
        <img className='petImage' src={this.props.pet.imageURL} alt={this.props.pet.description} />
        <div className='infoBox'>
            <p>Age: {this.props.pet.age}</p>
            <p>Gender: {this.props.pet.gender}</p>
            <p>Breed: {this.props.pet.breed}</p>
            <p>Description: {this.props.pet.description}</p>
            <p>Story: {this.props.pet.story}</p>
        </div>
        <button>Adopt</button>
    </div>;
  }
}

export default AnimalCard;
