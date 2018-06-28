import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import './NewAnimal.css';

class NewAnimal extends React.Component {
  render () {
    return (
      <div className='NewAnimal'>
        <h2>Add New Animal</h2>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Name:</ControlLabel>
            <FormControl type="text" placeholder="Enter text"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
            <ControlLabel>Image URL:</ControlLabel>
            <FormControl type="text" placeholder="Enter URL"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl componentClass="textarea" placeholder="Please describe the animal." />
            </FormGroup>
            <Button type='submit'>Submit</Button>

          </FormGroup>
        </form>
      </div>
    );
  }
};

export default NewAnimal;
