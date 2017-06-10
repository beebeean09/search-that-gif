import React from 'react';

class DisplaySearchGif extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let searchGifs;
    let searchGifOne;
    if (this.props.searchGif.data) {
      // searchGifs = this.props.searchGif.data.slice(0,6);
      searchGifs = this.props.searchGif.data;
      searchGifs = searchGifs.map((el, idx) => (
        <ul key={idx}>
          <img src={el.images.original.url} width='100' height='100'/>
        </ul>
      ));
      // searchGifOne =
      // <div>
      //   Hello here are the gifs.
      //   <ul>
      //     <img
      //       src={searchGifs.images.original.url}
      //       width='100'
      //       height='100'/>
      //   </ul>
      // </div>;
    }

    // {searchGifOne}
    return(
      <div className="search-gifs">
        {searchGifs}
      </div>
    );
  }
}

export default DisplaySearchGif;
