import React, { Component } from 'react';

import { Img, ImgFrame } from './styled-elements';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rendered: false,
      src: this.props.src,
      alt: this.props.alt || '',
    };
    this.ref = React.createRef();
  }

  imageRendered = () => {
    this.setState({ rendered: true });
  };

  startRender = () => {
    requestAnimationFrame(this.imageRendered);
  };

  // handle image loading from cache
  componentDidMount() {
    const img = this.ref.current;
    if (img && img.complete) {
      this.imageLoaded();
    }
  }

  imageLoaded = () => {
    requestAnimationFrame(this.startRender);
  };

  render() {
    let { src, alt, rendered } = this.state;
    return (
      <ImgFrame $rendered={rendered}>
        <Img
          ref={this.ref}
          $rendered={rendered}
          alt={alt}
          src={src}
          onLoad={this.imageLoaded}
        />
      </ImgFrame>
    );
  }
}
export default Image;
