import React, { Component } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import AdoptionQueue from '../AdoptionQueue/AdoptionQueue';
import ApiService from '../Services/ApiService';
import logo from '../Images/petful-icon.png';
import './AdoptPage.css';

const queueNames = [
  'Greg McCoy',
  'Lucy Boneparte',
  'Jason Myerzonne',
  'Edith Rose',
  'Buddy the Elf',
  'Harry Potter',
  'Arnold Schwarzenegger',
  'Sharon Stone',
  'Rachel Ticotin',
  'Linda Hamilton',
  'Edward Furlong',
  'Robert Patrick',
  'Joe Morton',
  'Alicia Vikander',
];

class AdoptPage extends Component {
  state = {
    cat: {},
    dog: {},
    people: [],
    newUser: '',
    adopted: false,
    userWaiting: false,
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

  handleSubmit = (e) => {
    e.preventDefault();
    ApiService.queueUser(this.state.newUser).then(() => {
      ApiService.getPeople()
        .then((people) => {
          this.setState({ people, queueSubmit: true, userWaiting: true });
        })
        .catch((error) => this.setState({ error }));
    });
    this.cycleQueue();
  };

  handleAdoptCat = () => {
    this.setState({ adopted: true });
    setTimeout(() => {
      ApiService.dequeueCat()
        .then(() => {
          ApiService.getCat()
            .then((cat) => {
              this.setState({ cat });
            })
            .catch((error) => this.setState({ error }));
        })
        .then(() => {
          ApiService.dequeuePerson().then(() => {
            ApiService.getPeople()
              .then((people) => {
                this.setState({
                  people,
                  newUser: '',
                  queueSubmit: false,
                  userAtFront: false,
                  adopted: false,
                });
              })
              .catch((error) => this.setState({ error }));
          });
        });
    }, 3000);
  };

  handleAdoptDog = () => {
    this.setState({ adopted: true });
    setTimeout(() => {
      ApiService.dequeueDog()
        .then(() => {
          ApiService.getDog()
            .then((dog) => {
              this.setState({ dog });
            })
            .catch((error) => this.setState({ error }));
        })
        .then(() => {
          ApiService.dequeuePerson().then(() => {
            ApiService.getPeople()
              .then((people) => {
                this.setState({
                  people,
                  newUser: '',
                  queueSubmit: false,
                  userAtFront: false,
                  adopted: false,
                });
              })
              .catch((error) => this.setState({ error }));
          });
        });
    }, 3000);
  };

  cycleQueue = () => {
    this.interval = setInterval(() => {
      ApiService.dequeuePerson()
        .then(() => {
          this.dequeuePet();
        })
        .then(() => {
          ApiService.getPeople()
            .then((people) => {
              this.setState({ people });
              if (people[0] === this.state.newUser) {
                clearInterval(this.interval);
                this.populateQueue();
              }
            })
            .catch((error) => this.setState({ error }));
        });
    }, 5000);
  };

  populateQueue = () => {
    this.interval = setInterval(() => {
      let populateUsers =
        queueNames[Math.floor(Math.random() * queueNames.length)];
      ApiService.queueUser(`${populateUsers}`).then(() => {
        ApiService.getPeople()
          .then((people) => {
            this.setState({ people });
            if (people.length === 5) {
              clearInterval(this.interval);
              this.setState({ userAtFront: true, userWaiting: false });
            }
          })
          .catch((error) => this.setState({ error }));
      });
    }, 5000);
  };

  handleFormChange = (e) => {
    e.preventDefault();
    this.setState({ newUser: e.target.value });
  };

  render() {
    return (
      <section className="adoptWindow">
        <div className="headerBox">
          <img className="pLogo" src={logo} alt="Petful Icon"></img>
          <h1 className="adoptTitle">Petful</h1>
        </div>
        <div className="animalCardBox">
          <AnimalCard
            pet={this.state.cat}
            handleAdopt={this.handleAdoptCat}
            userAtFront={this.state.userAtFront}
          />
          <AnimalCard
            pet={this.state.dog}
            handleAdopt={this.handleAdoptDog}
            userAtFront={this.state.userAtFront}
          />
        </div>
        <div className="queueFormBox">
          {this.state.userAtFront !== false && this.state.adopted === false && (
            <h3 className="statusMessage">You can now choose your new pet!</h3>
          )}
          {this.state.adopted !== false && (
            <h3 className="statusMessage">Thank You for Adopting!</h3>
          )}
          {this.state.userWaiting !== false && (
            <h2 className="statusMessage">Please Wait...</h2>
          )}
          {this.state.queueSubmit === false && (
            <form className="queueForm" onSubmit={this.handleSubmit}>
              <label htmlFor="nameInput">
                Wanna join the queue? Add your name below:
              </label>
              <input
                id="nameInput"
                type={'text'}
                onChange={(e) => this.handleFormChange(e)}
              ></input>
              <button className="submitBtn" type="submit">
                Submit
              </button>
            </form>
          )}
          <AdoptionQueue people={this.state.people} />
        </div>
      </section>
    );
  }
}

export default AdoptPage;
