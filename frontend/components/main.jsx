import React from 'react';
import GifContainer from './gif/gif_container';
import SearchGifFormContainer from './gif/gif_search_form_container';

const Main = ({ children }) => (
  <div id='main'>
    <GifContainer />
    <SearchGifFormContainer />
    { children }
  </div>
);

export default Main;
