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
      <div>
        <label>Search for a Gif Here:
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleInput}
            placeholder="Enter a term to search"></input>
        </label>
        <input
          type="button"
          value="Search"
          onClick={this.handleSubmit}></input>
        <DisplaySearchGif
          searchGif={searchGif}/>
      </div>
    );
  }
}

export default SearchGifForm;
