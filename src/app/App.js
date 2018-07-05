import React from 'react';

import AnimalCard from '../components/AnimalCard/AnimalCard';
import NewAnimal from '../components/NewAnimal/NewAnimal';
import connection from '../firebaseRequests/connection';
import getAnimalsRequest from '../firebaseRequests/animalsRequest';
import './App.css';
import animalsRequest from '../firebaseRequests/animalsRequest';

class App extends React.Component {
  state = {
    animals: [],
  }

  formSubmitEvent = newAnimal => {
    animalsRequest.newAnimalRequest(newAnimal)
      .then(() => {
        animalsRequest.getAnimalsRequest()
          .then(animals => {
            this.setState({animals});
          });
      })
      .catch(err => {
        console.error('error with animals POST', err);
      });
  }

  componentDidMount () {
    connection();
    getAnimalsRequest.getAnimalsRequest()
      .then(animals => {
        this.setState({animals});
        ;
      })
      .catch(err => {
        console.error(err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className='col-xs-12 col-md-6'>
          <AnimalCard animals={this.state.animals}/>
        </div>
        <div className='col-xs-12 col-md-6'>
          <NewAnimal
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
