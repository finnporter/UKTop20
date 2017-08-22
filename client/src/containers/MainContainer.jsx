import React from 'react';
import SongList from '../components/SongList';

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    const request = new XMLHttpRequest();
    request.addEventListener('load', () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const SongData = JSON.parse(jsonString);
      const topTwentyArray = SongData.feed.entry;
      this.setState({ songs: topTwentyArray });
    });
    request.open('GET', url);
    request.send();
  }

  render() {
    return (
      <div>
        <h1>UK Top 20</h1>
        <SongList songs={ this.state.songs } />
      </div>
    )
  }
}

export default MainContainer;