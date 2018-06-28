import React from 'react';
import Panel from 'react';

import('./AnimalCard.css');

class AnimalCard extends React.Component {
  render () {
    return (
      <Panel>
        <Panel.Body>
          <img src='https://placeimg.com/250/250/animals?t=1530155589867' alt=''/>
          <h4>Animalh4</h4>
          <p>Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description </p>
        </Panel.Body>
      </Panel>
    );
  }
};

export default AnimalCard;
