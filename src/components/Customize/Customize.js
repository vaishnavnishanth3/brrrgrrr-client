import React, { useState } from 'react';
import axios from "axios";

import "./Customize.css";

function Customize() {

    const [burgerName, setBurgerName] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [quantity, setQuantity] = useState('');
    
    function handleBurgerNameChange (event) {
        setBurgerName(event.target.value);
    };

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleIngredientChange (event, ingredient) {
        const isChecked = event.target.checked;
        
        if (isChecked) {
            setIngredients([...ingredients, ingredient])
        } else {
            setIngredients(ingredients.filter(item => item !== ingredient))
        };
    };

    function handleSubmit (e) {
        const userID = JSON.parse(localStorage.getItem('user')).userData.userId;
        const URL = `http://localhost:3001/customize/${userID}`;
        
        e.preventDefault();
        
        axios.post(URL , { id: userID, burgerName, ingredients, quantity })
        .then(()=> {console.log("Order Submitted") })
        .catch(error => { console.log(error) });
    };

    return (
        <div className="customize1">
            <div className="burger-customizer">
                <h2> Customize Your Own Burger </h2>
                
                <form onSubmit={(e) => handleSubmit}>
                    <label>
                        Burger Name:
                        <input type="text" value={burgerName} onChange={handleBurgerNameChange} required/>
                    </label>

                    <label>
                        Quantity: 
                        <input type="text" value={quantity} onChange={handleQuantityChange} required/>
                    </label>
                    <h3> Choose Ingredients: </h3>
                    
                    <div className="ingredients">
                        <label>
                            <input type="checkbox" onChange={(e) => handleIngredientChange(e, 'Cheese')}/>
                            Cheese
                        </label>                
                        <br />
                        <label>
                            <input type="checkbox" onChange={(e) => handleIngredientChange(e, 'Bacon')}/>
                              Bacon
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" onChange={(e) => handleIngredientChange(e, 'Lettuce')}/>
                            Lettuce
                        </label>
                         <br />
                        <label>
                            <input type="checkbox" onChange={(e) => handleIngredientChange(e, 'Tomato')}/>
                            Tomato
                        </label>
                        
                    </div>
                    
                    <p> Burger Name: {burgerName} </p>
        
                    <p> Ingredients: {ingredients.join(', ')} </p>
                    
                    <button onClick={handleSubmit}> Let's Brrrgrrr! </button>
                </form>
            </div>
        </div>
    );
};

export default Customize;
