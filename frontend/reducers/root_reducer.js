import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import GifReducer from './gif_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  gif: GifReducer
});

export default RootReducer;
