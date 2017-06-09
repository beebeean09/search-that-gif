import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import GifReducer from './gif_reducer';
import SearchGifReducer from './search_gif_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  gif: GifReducer,
  searchGif: SearchGifReducer
});

export default RootReducer;
