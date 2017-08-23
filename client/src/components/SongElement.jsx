import React from 'react';

class SongElement extends React.Component {
  render() {
    return (
      <tr>
        <td> { this.props.index } </td>
        <td>{ this.props.artist }  </td>
        <td> { this.props.songName } </td>
      </tr>
    )
  }
}

export default SongElement;