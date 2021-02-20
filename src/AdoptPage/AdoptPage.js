import React, { Component } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import AdoptionQueue from '../AdoptionQueue/AdoptionQueue';
import './AdoptPage.css';

class AdoptPage extends Component {
  render() {
    return (
      <section className="adoptWindow">
        <h2 className="adoptTitle">Petful</h2>
        <div className="animalCardBox"></div>
        <AnimalCard />
        <AnimalCard />
        <form>
          <label htmlFor="nameInput">
            Wanna join the queue? Add your name below:
          </label>
          <input id="nameInput" type="text"></input>
          <button type="submit">Submit</button>
        </form>
        <AdoptionQueue />
      </section>
    );
  }
}

export default AdoptPage;
