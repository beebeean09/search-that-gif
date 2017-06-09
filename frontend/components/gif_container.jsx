import Gif from './gif';
import { connect } from 'react-redux';
import { scrapeGif } from '../actions/project_actions';

const mapStateToProps = state => ({
  gif: state.gif,
  state: state
});

const mapDispatchToProps = dispatch => ({
  updateGif: () => dispatch(scrapeGif())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gif);
