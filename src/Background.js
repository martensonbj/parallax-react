import React, { Component } from 'react'
import FishContainer from './FishContainer'

class Background extends Component {
  constructor() {
    super()
    this.state = { scrolling: false, }
  }

  render() {
    console.log("In background component");
    let componentStyle={
      background     : `url('${this.props.src || 'bg-water.jpg'}') center center no-repeat`,
      backgroundSize : 'cover',
      height: `100vh`,
      transform      : `scale(1.75) translate(${this.props.xOffset / 100}%, ${this.props.yOffset / 100}%)`,
      color: `white`,
      zIndex: `-1`,
      position: `relative`,
    }

    return (
      <div style={componentStyle}>
        <FishContainer />
      </div>
    )
  }
}

export default Background;
