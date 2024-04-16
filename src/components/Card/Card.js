import React from "react"

import "./Card.css"

export default function Card(props) 
{
    function handleClick () {
        
    }

    return (
        <div className="Card">
            <div className="card-image">
                <img 
                    src={props.image} 
                    alt={props.title}/>
            </div>
            
            <div className="card-body">
                <h5>
                    {props.title}
                </h5>
                
                <p>
                    <span className="card-price">
                        ₹{props.price}
                    </span>
                </p>
                <button 
                    className="order-button" 
                    onClick={handleClick}>
                        Order
                </button>
            </div>
        </div>
    )
}
