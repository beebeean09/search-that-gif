import { connect } from 'react-redux';
import SearchGifForm from './gif_search_form';
import { fetchSearchGif } from '../../actions/image_search_gif_actions';

const mapStateToProps = state => ({
  state: state,
  searchGif: state.searchGif
});

const mapDispatchToProps = dispatch => ({
  fetchSearchGif: (searchTerm) => dispatch(fetchSearchGif(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(SearchGifForm);
