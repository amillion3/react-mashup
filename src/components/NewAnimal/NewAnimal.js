import React from 'react';
import PropTypes from 'prop-types';

import './NewAnimal.css';

// default object schema
const defaultAnimal = {
  name: '',
  imgUrl: '',
  description: '',
};
class NewAnimal extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    newAnimal: defaultAnimal,
  }

  formFieldState = (name, e) => {
    // takes in two values, name (key of the object)
    // and event (used to capture last input)
    // |||This is a 'on the fly update' as opposed to
    //      just grabbing the text when user hits submit
    const tempAnimal = {...this.state.newAnimal};
    // tempAnimal is now a copy of the existing this.state.newAnimal
    tempAnimal[name] = e.target.value;
    // new character is added to the appropriate key
    // user types c, now 'c'
    // user types a, now 'ca'
    // user types t, now 'cat'
    this.setState({newAnimal: tempAnimal});
    // set the state to the newly updated value (IE, 'cat')
  }

  nameChange = e => {
    // key typed in the 'name' input
    this.formFieldState('name', e);
  }
  urlChange = e => {
    // key typed in the 'imgUrl' input
    this.formFieldState('imgUrl', e);
  }
  descChange = e => {
    // key typed in the 'description' input
    this.formFieldState('description', e);
  }

  formSubmit = e => {
    const {onSubmit} = this.props;
    // shorthand for this.props.onSubmit, a function
    const {newAnimal} = this.state;
    // shorthand for this.state.newAnimal, an object
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.imgUrl &&
      newAnimal.description
      // makes sure each field is populated
    ) {
      onSubmit(this.state.newAnimal);
      // ?
      this.setState({newAnimal: defaultAnimal});
      // setState with the default (blank) values
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
              <label htmlFor='name'>Name:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='name'
                placeholder='Leo the Lion'
                value={newAnimal.name}
                onChange={this.nameChange}
              />
            </fieldset>
          </div>
          <div className='row'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='imgUrl'>Image Link:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='imgUrl'
                placeholder='http://www.coolanimalpicture.com/animal1.jpg'
                value={newAnimal.imgUrl}
                onChange={this.urlChange}
              />
            </fieldset>
          </div>
          <div className='row'>
            <fieldset className='col-xs-10 col-xs-offset-1'>
              <label htmlFor='description'>Description:</label>
              <br />
              <input
                className='col-xs-12'
                type='text'
                id='description'
                placeholder='If you notice this notice, you will notice that this notice is not worth noticing.'
                value={newAnimal.description}
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
