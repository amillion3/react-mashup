import React from 'react';
import PropTypes from 'prop-types';

import './NewAnimal.css';

const defaultAnimal = {
  inputName: '',
  inputUrl: '',
  inputDesc: '',
};
class NewAnimal extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: defaultAnimal,
  }

  formFieldState = (name, e) => {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  }

  nameChange = e => {
    this.formFieldState('inputName', e);
  }
  urlChange = e => {
    this.formFieldState('inputUrl', e);
  }
  descChange = e => {
    this.formFieldState('inputDesc', e);
  }

  formSubmit = e => {
    const {onSubmit} = this.props;
    const {newAnimal} = this.state;
    e.preventDefault();
    if (
      newAnimal.inputName &&
      newAnimal.inputUrl &&
      newAnimal.inputDesc
    ) {
      onSubmit(this.state.newAnimal);
      this.setState({newAnimal: defaultAnimal});
    } else {
      alert('Please fill out all the input fields');
    }
  }

  render () {
    const { newAnimal } = this.state;
    return (
      <div className='NewAnimal col-xs-12'>
        <h2>Add New Animal</h2>
        <form onSubmit={this.formSubmit}>
          <div className='row'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='inputName'>Name:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='inputName'
                placeholder='Leo the Lion'
                value={newAnimal.inputName}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>
          <div className='row'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='inputUrl'>Image Link:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='inputUrl'
                placeholder='http://www.coolanimalpicture.com/animal1.jpg'
                value={newAnimal.inputUrl}
                onChange={this.urlChange}
              />
            </fieldset>
          </div>
          <div className='row'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='inputDesc'>Description:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='inputDesc'
                placeholder='If you notice this notice, you will notice that this notice is not worth noticing.'
                value={newAnimal.inputDesc}
                onChange={this.descChange}
              />
            </fieldset>
          </div>
          <button className='col-xs-4 col-xs-offset-4 btn btn-info'>Submit Animal</button>
        </form>
      </div>
    );
  }
};

export default NewAnimal;
