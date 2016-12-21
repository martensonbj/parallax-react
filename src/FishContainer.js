import React, { Component } from 'react';
import ParallaxContainer    from './ParallaxContainer';
import Fish from './Fish';

const FishContainer = ({xOffset, yOffset}) => {
  console.log("In Fish Container");
  return (
    <Fish xOffset={xOffset} yOffset={yOffset}/>
  )
}

export default ParallaxContainer(FishContainer);
