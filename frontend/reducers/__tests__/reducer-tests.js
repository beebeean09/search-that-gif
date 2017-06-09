import GifReducer from '../gif_reducer';
import RootReducer from '../root_reducer';
import { createStore } from 'redux';

/*
  NOTE: Our frontend state shape looks like this:
  {
    gif: {
      data: {
        id: "...",
        type: "gif",
        image_original_url: "...",
        image_url: "...",
        image_mp4_url: "...",
        image_frames: "...",
        image_width: "...",
        image_height: "...",
        fixed_height_downsampled_url: "...",
        fixed_width_downsampled_url: "...",
        fixed_width_downsampled_width: "...",
        fixed_width_downsampled_height: "...",
        fixed_heigth_small_url: "...",
        fixed_heigth_small_still_url: "...",
        fixed_heigth_small_width: "...",
        fixed_heigth_small_height: "...",
        fixed_width_small_url: "...",
        fixed_width_small_still_url: "...",
        fixed_width_small_width: "...",
        fixed_width_small_height: "...",
        username: "...",
        caption: "..."
      },
      meta: {
        status: 200,
        msg: "OK",
        response_id: "..."
      }
    }
  }
*/

const gif1 = { data: { image_url: "http://gph.is/1iwzzrZ" } };
const gif2 = { data: {
    image_url: "https://media.giphy.com/media/SbGtGgkU1J8hq/giphy.gif"
  } };

describe('Reducers', () => {
  describe('GifReducer', () => {

    test('should initialize with an empty object as the default state', () => {
      expect(GifReducer(undefined, {})).toEqual({});
    });

    describe('handling the RECEIVE_GIF action', () => {
      let action, testGif;

      beforeEach(() => {
        action = 'RECEIVE_GIF';
        testGif = gif1;
      });

      test('should replace the state with the action\'s benches', () => {
        expect(GifReducer(undefined, { type: action, gif: testGif })).toEqual(testGif);
      });

      test('should not modify the old state', () => {
        expect(GifReducer(gif2, { type: action, gif: testGif })).toEqual(testGif);
        expect({ data: {
            image_url: "https://media.giphy.com/media/SbGtGgkU1J8hq/giphy.gif"
          } }).toEqual(gif2);
      });
    });

  });
});
