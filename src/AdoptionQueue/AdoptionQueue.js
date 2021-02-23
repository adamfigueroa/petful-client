import React, { Component } from 'react';
import './AdoptionQueue.css';

class AdoptionQueue extends Component {
  render() {
    return (
      <div className="queueBox">
        <h3>Current Queue:</h3>
        {this.props.people.map((person, index) => {
          return (
            <p className="queuePerson" key={index}>
              {index + 1}: {person}
            </p>
          );
        })}
      </div>
    );
  }
}

export default AdoptionQueue;
