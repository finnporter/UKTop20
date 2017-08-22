import React from 'react';

class SongElement extends React.Component {
  render() {
    return (
      <li>
       { this.props.songName } – { this.props.artist }
      </li>
    )
  }
}

export default SongElement;