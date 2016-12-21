import React, { Component } from 'react'

class Fish extends Component {
  constructor() {
    super()
    this.state = { scrolling: false, }
  }

  render() {
    console.log("In fish component");
    let componentStyle={
      background     : `url('${this.props.src || 'fish1.png'}') center center no-repeat`,
      transform      : `scale('0.30) translate(${this.props.xOffset / 100}%, ${this.props.yOffset / 100}%)`,
      zIndex: `1`,
      height: '480px',
      width: '480px',
    }

    return (
      <div className="Fish" style={componentStyle}>
      </div>
    )
  }
}

export default Fish;
