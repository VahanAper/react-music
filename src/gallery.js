import React, { Component } from 'react';

import './app.css';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingUrl: '',
      audio: null,
      playing: false,
    };
  }

  playAudio(url) {
    if (url !== null) {
      const audio = new Audio(url);
      if (!this.state.playing) {
        audio.play();
        this.setState({
          playing: true,
          playingUrl: url,
          audio,
        });
      } else if (this.state.playingUrl === url) {
        this.state.audio.pause();
        this.setState({
          playing: false,
        });
      } else {
        this.state.audio.pause();
        audio.play();
        this.setState({
          playingUrl: url,
          playing: true,
          audio,
        });
      }
    }
  }

  render() {
    const { tracks } = this.props;
    return (
      <div>
        {
          tracks.map((track, i) => {
            const key = `key_${i}`;
            const trackImg = track.album.images[0].url;
            return (
              <div
                role="button"
                tabIndex={-1}
                className="track"
                key={key}
                onClick={() => this.playAudio(track.preview_url)}
              >
                <img
                  alt="Track"
                  className="track-img"
                  src={trackImg}
                />
                <div className="track-play">
                  <div className="track-play-inner">
                    {
                      this.state.playingUrl === track.preview_url && this.state.playing
                        ? <span>| |</span>
                        : <span>&#9654;</span>
                    }
                  </div>
                </div>
                <p className="track-text">{track.name}</p>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Gallery;
