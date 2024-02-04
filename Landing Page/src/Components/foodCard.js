import React from "react";
import './foodCard.css';

const FoodCard = (props) => {
    return <div className="food-card">
        <img src={props.src} alt="food" />
        <h2>{props.name}</h2>
    </div>;
}

export default FoodCard;