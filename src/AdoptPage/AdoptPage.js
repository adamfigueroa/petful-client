import React, { Component } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import AdoptionQueue from '../AdoptionQueue/AdoptionQueue';
import ApiService from '../Services/ApiService';
import logo from './petful-icon.png';
import './AdoptPage.css';

const queueNames = [
  'Greg McCoy',
  'Lucy Boneparte',
  'Jason Myerzonne',
  'Edith Rose',
];

class AdoptPage extends Component {
  state = {
    cat: {},
    dog: {},
    people: [],
    person: '',
    userAction: false,
    queueSubmit: false,
    userAtFront: false,
  };

  componentDidMount() {
    ApiService.getCat()
      .then((cat) => {
        this.setState({ cat });
      })
      .catch((error) => this.setState({ error }));
    ApiService.getDog()
      .then((dog) => {
        this.setState({ dog });
      })
      .catch((error) => this.setState({ error }));
    ApiService.getPeople()
      .then((people) => {
        this.setState({ people });
      })
      .catch((error) => this.setState({ error }));
  }

  dequeuePet = () => {
    let randoBool = Math.random() < 0.5;
    if (randoBool === true) {
      ApiService.dequeueCat().then(() => {
        ApiService.getCat()
          .then((cat) => {
            this.setState({ cat });
          })
          .catch((error) => this.setState({ error }));
      });
    } else {
      ApiService.dequeueDog().then(() => {
        ApiService.getDog()
          .then((dog) => {
            this.setState({ dog });
          })
          .catch((error) => this.setState({ error }));
      });
    }
  };

  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({ person: e.target.value });
  };

  render() {
    return (
      <section className="adoptWindow">
        <div className="headerBox">
          <img className="pLogo" src={logo} alt="Petful Icon"></img>
          <h1 className="adoptTitle">Petful</h1>
        </div>
        <div className="animalCardBox">
          <AnimalCard pet={this.state.cat} />
          <AnimalCard pet={this.state.dog} />
        </div>
        <div className="queueFormBox">
          <form className="queueForm">
            <label htmlFor="nameInput">
              Wanna join the queue? Add your name below:
            </label>
            <input id="nameInput" type="text" onChange={(e) => this.handleFormChange(e)}></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <AdoptionQueue />
      </section>
    );
  }
}

export default AdoptPage;
