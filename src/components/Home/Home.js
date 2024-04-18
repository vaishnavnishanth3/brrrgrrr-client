import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

import burgerImage from "../About/assets/burger-image.jpeg";
import bookMyShow from "./assets/bookmyshow-logo.png";

function Home() {

    function handleClick(e) {
        const userID = JSON.parse(localStorage.getItem('user')).userData.userId;
        const URL = `http://localhost:3001/orders/${userID}`;
      
        e.preventDefault();

        axios.post(URL , { id: userID, title: "Classic Burger", price: 499, quantity: 3 })
        .then(()=> console.log("Order Submitted"))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div id="main">
                <div className="greet">
                    <h1>Try our new reciepe on 
                        <span className="newandhot">Search!</span>
                    </h1>
                </div>

                <div className="special-offers">
                    <h2>Special Offers!</h2>

                    <div className="card">
                        <div className="item-name">
                            <h2>Classic Burger</h2>
                        </div>

                        <div className="item-image">
                            <img src={burgerImage} alt="burger"/>
                        </div>
                        
                        <div className="price-details">
                            <div>
                                <p>Buy 3 for <span className="price-number"> ₹499/- </span> </p>
                                
                                <p> Now only at <span className="name">Brrrgrrr</span> </p>
                                
                                <button className="buy-special" onClick={handleClick}> Buy Now! </button>
                            </div>
                        </div>
                    </div> 
                    
                    <div className="order-now">
                        <h3>Order Now using coupons</h3>
                        
                        <h3>Now available with 
                            <img className="bookmyshowlogo" src={bookMyShow} alt='bookmyshow'/>
                    
                            <a className="bookmyshowlink" href="https://in.bookmyshow.com" target="_blank" rel="noreferrer"> Bookmyshow! </a>
                        </h3>
                    </div>
                
                    <div className="customize">
                        <h1>Customize your Own Burger with our available ingredients!</h1>
                        
                        <h2>Create your own Happy snack!</h2>
                        
                        <Link to="/customize">
                            <button> Customize </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;