import React from "react";

import "./Card.css"

export default function Card(item) {
    function handleClick () {
        
    };

    return(
        <div className="Card">
            <div className="card-image">
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="card-body">
                <h5>{item.title}</h5>
                <p><span className="card-price">₹{item.price}</span></p>
                <button className="order-button" onClick={handleClick}>Order</button>
            </div>
        </div>
    )
}