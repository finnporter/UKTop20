import React from 'react';

class SongElement extends React.Component {
  render() {
    return (
      <div>
          <li> { this.props.artist } — { this.props.songName } </li>
      </div>
    )
  }
}

export default SongElement;