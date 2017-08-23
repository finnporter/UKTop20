import React from 'react';
import SongElement from './SongElement';

class SongList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const key = []
    const songComponents = this.props.songs.map(function (song, index) {
      return (
        <SongElement key={ index } index={ ++index } songName={ song['im:name'].label } artist={ song['im:artist'].label } ></SongElement>
      )
    });

    return (
      <div>
        <table>
          <tbody>
           { songComponents } 
          </tbody>
        </table>
      </div>
    )
  }
}


export default SongList;