import * as ImageGifAPIUtil from '../util/image_gif_api_util';
export const RECEIVE_SEARCH_GIF = 'RECEIVE_SEARCH_GIF';

export const receiveSearchGif = (gif) => ({
  type: RECEIVE_SEARCH_GIF,
  gif
});

export const fetchSearchGif = (searchTerm) => dispatch => (
  ImageGifAPIUtil.searchGif(searchTerm)
    .then(gif => dispatch(receiveSearchGif(gif)))
);
