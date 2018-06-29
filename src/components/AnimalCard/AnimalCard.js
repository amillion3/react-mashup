import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Col from 'react-bootstrap/lib/Col';
// When importing from react-bootstrap you need to import the component from the lib folder

import('./AnimalCard.css');

class AnimalCard extends React.Component {
  render () {
    const {animals} = this.props;

    const animalComponenets = animals.map(a => {
      return (
        <Col xs={12} md={6}>
          <div className='div-animal-card'>
            <img className = 'img-circle img-responsive' key={a.id} src={a.imgUrl} alt=''/>
            <h3>{a.name}</h3>
            <p>{a.description}</p>
          </div>
        </Col>
      );
    });

    return (
      <Panel>
        <Panel.Body>
          {animalComponenets}
        </Panel.Body>
      </Panel>
    );
  }
};

export default AnimalCard;
