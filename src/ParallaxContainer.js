import React, { Component } from 'react';

const ApplyParallax = (WrappedComponent) => {

  return class ParallaxContainer extends Component {
    constructor() {
      super();
      this.state = {
        xOffset: 0,
        yOffset: 0,
      }
    }

    shiftBackground(e) {
      const xOffset = e.clientX;
      const yOffset = e.clientY;

      this.setState( { xOffset, yOffset } )
    }

    render () {
      console.log("In parallax container");
      return (
        <span onMouseMove={(e) => this.shiftBackground(e)} >
          <WrappedComponent xOffset={this.state.xOffset} yOffset={this.state.yOffset} />
        </span>
      );
    }
  }
}

export default ApplyParallax;
