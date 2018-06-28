import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import NewAnimal from '../components/NewAnimal/NewAnimal';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className='col-xs-12 col-md-6'>
          <Animals />
        </div>
        <div className='col-xs-12 col-md-6'>
          <NewAnimal />
        </div>
      </div>
    );
  }
}

export default App;
