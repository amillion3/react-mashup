import React from 'react';

import AnimalCard from '../components/AnimalCard/AnimalCard';
import NewAnimal from '../components/NewAnimal/NewAnimal';
import connection from '../firebaseRequests/connection';
import getAnimalsRequest from '../firebaseRequests/animalsRequest';
import './App.css';

class App extends React.Component {
  state = {
    animals: [],
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
          <NewAnimal />
        </div>
      </div>
    );
  }
}

export default App;
