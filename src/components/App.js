import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';


import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';



const API_KEY = "AIzaSyDPKPf1EhNlBYnS5dcRNP4zfWGLvy0_U1c";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('react')

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo => this.setState({ selectedVideo }))}/>
      </div>
    )
  }
}

export default App;



