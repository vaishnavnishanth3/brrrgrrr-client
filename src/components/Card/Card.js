import React from "react";
import axios from "axios";

import "./Card.css";

function Card(props) 
{
    const title = props.title;
    const price = props.price;
    
    function handleClick (e) {
        const userID = JSON.parse(localStorage.getItem('user')).userData.userId;
        const URL = `http://localhost:3001/orders/${userID}`;
      
        e.preventDefault();

        axios.post(URL , { id: userID, title, price })
        .then(()=> console.log("Order Submitted"))
        .catch(error => console.log(error))
    };

    return (
        <div className="Card">
            <div className="card-image">
                <img src={props.image} alt={props.title}/>
            </div>
            
            <div className="card-body">
                <h5>{props.title}</h5>
                <p> <span className="card-price">₹{props.price}</span> </p>
                <button className="order-button" onClick={handleClick}>Order</button>
            </div>
        </div>
    );
};

export default Card;