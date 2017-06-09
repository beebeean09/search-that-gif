import React from 'react';
import GifContainer from './gif_container';

const Main = ({ children }) => (
  <div id='main'>
    <GifContainer />
    { children }
  </div>
);

export default Main;
