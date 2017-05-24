import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div className="app-title">Music Maser</div>
        <div>
          <input placeholder="Search an artist ..." />
          <button>Search</button>
        </div>
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
