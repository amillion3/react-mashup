import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import './NewAnimal.css';

class NewAnimal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      inputName: '',
      inputUrl: '',
      inputDesc: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange (e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.error(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    // e.stopPropagation();
    console.error('submitted: ', this.state);
  }

  newAnimalClick = e => {
    e.preventDefault();
    // const {} = this.props;
    console.error(e);
    console.error(this);
    // this.newName.setState(e.target);
  }

  render () {
    return (
      <div className='NewAnimal'>
        <h2>Add New Animal</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name:</ControlLabel>
            <FormControl type="text" placeholder="Enter text"
              name='inputName'
              value={this.state.newName}
              onChange={this.handleInputChange}
            />
            <ControlLabel>Image URL:</ControlLabel>
            <FormControl type="text" placeholder="Enter URL"
              name='inputUrl'
              value={this.state.newUrl}
              onChange={this.handleInputChange}
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name='inputDesc'
                componentClass="textarea"
                placeholder="Please describe the animal."
                value={this.state.newDesc}
                onChange={this.handleInputChange} />
            </FormGroup>
            <Button type='submit'>Submit</Button>

          </FormGroup>
        </form>
      </div>
    );
  }
};

export default NewAnimal;
