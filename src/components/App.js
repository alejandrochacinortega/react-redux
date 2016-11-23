import React from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './SearchBar'
import VideoList from './VideoList';


const API_KEY = "AIzaSyDPKPf1EhNlBYnS5dcRNP4zfWGLvy0_U1c";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'react'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}

export default App;



