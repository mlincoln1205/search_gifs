import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null
    };
  }

  search = (query) => {
    // API Call
    giphy('C7H17QCyXc4BSsJoeQsgwlGTAYgPK23A')
      .search({
        q: query,
        rating: 'g',
        limit: 15
      }, (err, result) => {
        // Res contains gif data!
        this.setState({
          gifs: result.data
        });
      });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div className="container">
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div>
            <h3 className="header">Gif Hunter by <a href="https://www.linkedin.com/in/lincoln-marcolongo/" target="_blank">Lincoln Marcolongo</a></h3>
          </div>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}
export default App;
