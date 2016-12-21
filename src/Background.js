import React, { Component } from 'react'

class Background extends Component {
  constructor() {
    super()
    this.state = { scrolling: false, }
  }

  render() {
    console.log("In background component");
    let componentStyle={
      background     : `url('${this.props.src || 'http://www.wp.sustainablesv.org/wp-content/uploads/2016/05/wallpaper.jpg'}') center center no-repeat`,
      backgroundSize : 'cover',
      height: `100vh`,
      transform      : `scale(1.75) translate(${this.props.xOffset / 100}%, ${this.props.yOffset / 100}%)`,
      color: `white`,
    }

    return (
      <div style={componentStyle}>
        Parallax Component
      </div>
    )
  }
}

export default Background;
