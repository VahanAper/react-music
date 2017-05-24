import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
} from 'react-bootstrap';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-title">Music Maser</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search an Artist ..."
            />
            <InputGroup.Addon>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
