import React, { useState, useEffect } from "react";

import Card from "../Card/Card";

import "./Search.css";

function Search() {
    
    const [burgers, setBurgers] = useState([]);
    
    const URL = "http://localhost:3001/burgers"

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        .then(data => {setBurgers(data)})
        .catch(error=> { console.log("Error Fetching burgers: "+error);})
    },[]);

    return (
        <div className="search1">
            <h1>Brrrgrrr for your favourite Burger!</h1>
            
            <div className="search-area">
                <input 
                    id="browseInput" 
                    type="text" 
                    placeholder="Search..."
                />
                
                <button> Brrrgrrr </button> 
            </div>
            
            <div className="hot-ready"> <h2> <span className="hot"> Hot </span> and Ready </h2> </div>
            
            <div className="burger-list">
                {burgers.map (burger => 
                    <div key={burger.id} className="cards">
                        <Card 
                            key={burger.id}
                            title={burger.name} 
                            image={burger.image} 
                            price={burger.price} 
                        />
                    </div>
                    )
                };
            </div>
        </div>
    )
}

export default Search;
