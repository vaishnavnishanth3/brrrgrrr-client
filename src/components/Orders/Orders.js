import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Orders.css";

function Orders() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [orders, setOrders] = useState([]);
    const [customizedBurgers, setCustomizedBurgers] = useState([]);

    function handleCancel(id) {
        try {
            const userID = JSON.parse(localStorage.getItem("user")).userData.userId;
            const orderID = id;
    
            const URL = `http://localhost:3001/orders/cancel/${userID}/${orderID}`;
    
            axios.delete(URL)
                .then(() => {
                    console.log("Order Canceled!");
                    
                    axios.get(`http://localhost:3001/orders/${userID}`)
                        .then(response => {
                            console.log(response.data.order);
                            setOrders(response.data.order);
                        })
                        .catch(error => {
                            console.log("Error fetching orders after cancellation:", error);
                        });
                })
                .then(() => {
                    const target = document.querySelectorAll('.cancel-button')[0];
                    target.innerHTML = "Order Canceled!"
                    target.style.backgroundColor = "red"
                    target.style.color = "black";
                })
                .catch(error => {
                    console.log("Error canceling order:", error);
                });
        } catch (error) {
            console.error("Error canceling order:", error);
        }
    }
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.userData) {
            setIsLoggedIn(true);
            const userOrders = user.userData.orders;
            const userCustomizedBurgers = user.userData.customizedBurgers;
            setOrders(userOrders);
            setCustomizedBurgers(userCustomizedBurgers);
            console.log("userOrders: ")
            console.log(userOrders);
            console.log("customizedOrders: ")
            console.log(customizedBurgers)
        }},[])

    return (
        <div className="orders">
            {isLoggedIn && orders.length > 0 ? (
                <div>
                    <h1>Order Details</h1>
                    <div>
                        <div className="orders-made">
                            {orders.map((order, index) => {
                                return (
                                    <div className="individual-order" key={index}>
                                        <div className="description">
                                            <h3>{order.name} ({order.quantity}) </h3>
                                            <p>₹ {order.price}</p>
                                        </div>
                                        <div className="image">
                                            <img src={order.image} alt={order.name} />
                                        </div>
                                        <button 
                                            className="cancel-button" 
                                            onClick={() => { handleCancel(order._id) }}>
                                            Cancel Order
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : isLoggedIn && orders.length === 0 ? (
                <div>
                    <div className="orders-listed">
                        <div className="orders-made">
                            <h3>No orders made yet!</h3>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="orders-listed">
                        <div className="orders-made">
                            <h3>Please log in to view your orders.</h3>
                        </div>
                    </div>
                </div>
            )}

            {customizedBurgers.length > 0 && (
                <div className="orders1">
                    <h1>Customized Burgers</h1>
                    <div className="orders-listed">
                        {customizedBurgers.map((burger, index) => 
            
                            (
                            <div className="individual-order" key={index}>
                                <div className="description">
                                <h3>{burger.name} <p>({burger.quantity})</p></h3>
                                <p>₹ {burger.price}</p>
                                </div>
                                <ul>
                                    {burger.ingredients.map((ingredient, i) => (
                                        <li key={i}>{ingredient}</li>
                                    ))}
                                </ul>
                                <button className="cancel-button" onClick={() => handleCancel()}> Cancel Order </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Orders;
