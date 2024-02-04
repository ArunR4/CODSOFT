import React from 'react'

import "./stepsCard.css"
import img from '../photos/food.png';

function StepsCard(props) {
  return (
    <div className='steps-card-single'>
        <img src={props.src} alt="food" />
        <h5>{props.step}</h5>
        <h2>{props.name}</h2>
        <h3>{props.para}</h3>
    </div>
  )
}

export default StepsCard;