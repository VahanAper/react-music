import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
} from 'react-bootstrap';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      query: '',
    };
  }

  onChangeInput(event) {
    this.setState({
      query: event.target.value,
    });
  }

  onKeyPressEnter(event) {
    if (event.key === 'Enter') {
      this.search();
    }
  }

  search(event) {
    console.log('query', this.state.query);
  }

  render() {
    return (
      <div className="app">
        <div className="app-title">Music Maser</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              value={this.state.query}
              type="text"
              placeholder="Search an Artist ..."
              onChange={this.onChangeInput}
              onKeyPress={this.onKeyPressEnter}
            />
            <InputGroup.Addon onClick={this.search}>
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
