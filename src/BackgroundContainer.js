import React, { Component } from 'react';
import ParallaxContainer    from './ParallaxContainer';
import Background from './Background';

const BackgroundContainer = ({xOffset, yOffset}) => {
  console.log("In Background Container");
  return (
    <Background xOffset={xOffset} yOffset={yOffset}/>
  )
}

export default ParallaxContainer(BackgroundContainer);
