import { RECEIVE_GIF } from '../actions/project_actions';
import { RECEIVE_SEARCH_GIF} from '../actions/image_search_gif_actions';
import merge from 'lodash/merge';

const GifsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_GIF:
      return action.gif;
    case RECEIVE_SEARCH_GIF:
      return action.gif;
    default:
      return state;
  }
};

export default GifsReducer;
