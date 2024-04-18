import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Orders.css";

function Orders() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [orders, setOrders] = useState([]);
    const [customizedBurgers, setCustomizedBurgers] = useState([]);
    const [burgers, setBurgers] = useState([]);

    const URL = "http://localhost:3001/burgers";

    async function handleCancel (_id) {
        try {
            const userID = JSON.parse(localStorage.getItem("user")).userData.userId;
            
            const response = await axios.post(`orders/cancel/${userID}}`);
            setOrders(response.data.user.orders);
            console.log("Order canceled");
        } catch (error) {
            console.error("Error canceling order:", error);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.userData) {
            setIsLoggedIn(true);
            const userOrders = user.userData.orders;
            const userCustomizedBurgers = user.userData.customizedBurgers;
            setOrders(userOrders);
            setCustomizedBurgers(userCustomizedBurgers);
        }},[])
        
    useEffect(()=> {
        fetch(URL)
        .then(response => response.json())
        .then(data => setBurgers(data))
        .catch(error=> { console.log("Error Fetching burgers: "+error);})
    }, [])
        
    useEffect(() => {
        console.log(burgers);
    },[burgers]);

    return (
        <div className="orders">
            {isLoggedIn && orders.length > 0 ? (
                <div>
                    <h1>Order Details</h1>
                    <div>
                        <div className="orders-made">
                            {orders.map((order, index) => {
                                const burger = burgers.find(burger => burger.name === order.name);
                                console.log(burgers);
                                return (
                                    <div className="individual-order" key={index}>
                                        <div className="description">
                                            <h3>{order.name}</h3>
                                            <p>₹ {burger.price}</p>
                                            <p>({order.quantity})</p>
                                        </div>
                                        <div className="image">
                                            <img src={burger.image} alt={order.name} />
                                        </div>
                                        <button className="cancel-button" onClick={(_id) => handleCancel()}>
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
                                <h3>{burger.name}</h3>
                                <p>₹ {burger.price}</p>
                                <p>({burger.quantity})</p>
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