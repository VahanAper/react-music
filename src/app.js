import React, { Component } from 'react';
import {
  FormGroup,
  FormControl,
  InputGroup,
  Glyphicon,
} from 'react-bootstrap';

import './app.css';
import Profile from './profile';

const BASE_URL = 'https://api.spotify.com/v1/search';
const Console = console;

class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
    this.search = this.search.bind(this);

    this.state = {
      query: '',
      artist: null,
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

  search() {
    const FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;

    fetch(FETCH_URL, {
      method: 'GET',
    })
      .then(response => response.json())
      .then((json) => {
        if (json.artists.items.length > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });
        } else {
          Console.warn('No artist was found');
        }
      })
      .catch(err => Console.log('ERROR', err));
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
        <Profile artist={this.state.artist} />
        <div className="gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
