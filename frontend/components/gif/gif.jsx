import React from 'react';

class Gif extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.updateGif();
  }

  render() {
    let source = '';
    if (this.props.gif.data){
      source = this.props.gif.data.image_url;
    }
    let gif = <img className="gif" src={ source }></img>;
    return(
      <section className="gif-container">
        { gif }
      </section>
    );
  }
}

export default Gif;
