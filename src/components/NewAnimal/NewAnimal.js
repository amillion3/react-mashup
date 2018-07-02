import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import './NewAnimal.css';

class NewAnimal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {newName: ''};

    this.handleChange = this.handleChange().bind(this);
    this.handleSubmit = this.handleSubmit().bind(this);
  }

  handleChange (e) {
    this.setState({newName: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    console.error('submitted: ', this.state.value);
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
        <form>
          <FormGroup controlId="formBasicText" onSubmit={this.handleSubmit}>
            <ControlLabel>Name:</ControlLabel>
            <FormControl type="text" placeholder="Enter text"
              value={this.state.newName}
              // onChange={this.handleChange}
            />
            <ControlLabel>Image URL:</ControlLabel>
            <FormControl type="text" placeholder="Enter URL"
              value={this.state.newUrl}
              // onChange={this.handleChange}
            />
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                placeholder="Please describe the animal."
                value={this.state.newDesc} />
            </FormGroup>
            <Button type='submit' onClick={this.newAnimalClick}>Submit</Button>

          </FormGroup>
        </form>
      </div>
    );
  }
};

export default NewAnimal;
