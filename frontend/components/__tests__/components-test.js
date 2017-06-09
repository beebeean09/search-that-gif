import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import GifContainer from '../gif_container';

const gif1 = { data: { image_url: "http://gph.is/1iwzzrZ" } };
const gif2 = { data: {
    image_url: "https://media.giphy.com/media/SbGtGgkU1J8hq/giphy.gif"
  } };
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ gif: gif1 });

describe('gif container', () => {
  let gifWrapper,
      actualGif;

  describe('creating a new gif', () => {
    beforeEach(() => {
      gifWrapper = mount(
        <GifContainer store={testStore} />
      ).find('Gif');

      actualGif = gifWrapper.find('img');

    });

    test('correctly maps dispatch to props', () => {
      expect(gifWrapper.props().gif).toBeDefined();
    });

    test('updates the gif url when props change', () => {
      gifWrapper.find('section').setProps({ gif: gif2 });
      expect(actualGif.props().src).toEqual('https://media.giphy.com/media/SbGtGgkU1J8hq/giphy.gif');
    });

  });
});
