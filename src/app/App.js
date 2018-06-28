import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import AnimalCard from '../components/AnimalCard/AnimalCard';
import NewAnimal from '../components/NewAnimal/NewAnimal';
import './App.css';

class App extends Component {
  state = {
    animals: [],
  }



  render () {
    return (
      <div className="App">
        <div className='col-xs-12 col-md-6'>
          <Animals>
            <AnimalCard></AnimalCard>
          </Animals>
        </div>
        <div className='col-xs-12 col-md-6'>
          <NewAnimal />
        </div>
      </div>
    );
  }
}

export default App;
