import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='col-xs-12 col-md-6'>
          <Animals />
        </div>
        <div className='col-xs-12 col-md-6'>

        </div>
      </div>
    );
  }
}

export default App;
