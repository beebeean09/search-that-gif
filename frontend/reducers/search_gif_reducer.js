import { RECEIVE_SEARCH_GIF} from '../actions/image_search_gif_actions';
import merge from 'lodash/merge';

const SearchGifReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH_GIF:
      return action.gif;
    default:
      return state;
  }
};

export default SearchGifReducer;
