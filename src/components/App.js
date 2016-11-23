import React from 'react';
import YTSearch from 'youtube-api-search';


import SearchBar from './SearchBar'

const API_KEY = "AIzaSyDPKPf1EhNlBYnS5dcRNP4zfWGLvy0_U1c";

YTSearch({key: API_KEY, term: 'react'}, function(data) {
  console.log('data ', data);
});

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
};

export default App;



