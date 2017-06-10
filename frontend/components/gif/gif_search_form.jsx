import React from 'react';
import DisplaySearchGif from './display_search_gif';

class SearchGifForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({searchTerm: event.currentTarget.value});
  }

  handleSubmit() {
    let parsedTerm = this.state.searchTerm.split(' ').join('+');
    this.props.fetchSearchGif(parsedTerm);
  }

  render() {
    const searchGif = this.props.searchGif;
    const fetchSearchGif = this.props.fetchSearchGif;

    return(
      <div className="gif-container">
        <h1>Search That Gif!</h1>
        <div className="gif-search-form">
          <div className="gif-input">
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleInput}
              placeholder="Enter a term to search"></input>
          </div>
          <div className="button-container">
            <input
              className="button"
              type="button"
              value="Search"
              onClick={this.handleSubmit}></input>
          </div>
          <DisplaySearchGif
            searchGif={searchGif}/>
        </div>
      </div>
    );
  }
}

export default SearchGifForm;
