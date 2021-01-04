import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/200w.webp?cid=ecf05e473xe8m95mk4xg5n5ztxhg0ha9r0g7khse6o3hsn4e&rid=200w.gif`;
    return (
        <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
