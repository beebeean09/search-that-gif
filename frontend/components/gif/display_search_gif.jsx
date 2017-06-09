import React from 'react';

class DisplaySearchGif extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let searchGifs;
    let searchGifOne;
    if (this.props.searchGif.data) {
      // searchGifs = this.props.searchGif.data.map((el, idx) => (
      //   <li key={idx}>
      //     <img src={el.images.original.url} width='100' height='100'/>
      //   </li>
      // ));
      searchGifs = this.props.searchGif.data[0];
      searchGifOne =
      <div>
        Hello here are the gifs.
        <ul>
          <img
            src={searchGifs.images.original.url}
            width='100'
            height='100'/>
        </ul>
      </div>;
    }

    return(
      <div>
        {searchGifOne}
      </div>
    );
  }
}

export default DisplaySearchGif;
