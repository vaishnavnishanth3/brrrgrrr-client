import React, { useState } from "react"
import { Link } from "react-router-dom"

import "./Header.css";

import searchImage from "./assets/searchImage.png"
import burgerImage from "./assets/burger.jpeg"

export default function Header() 
{
    const [activeTab, setActiveTab] = useState('Home')
      
    function handleClick(tab) 
    {
        setActiveTab(tab)
    }

    return (
        <div id="header">
            <div className="logo">
                <Link 
                    to="/"
                    className={activeTab === 'Home' ? 'tab active' : 'tab'}
                    onClick={() => handleClick('Home')}
                >
                    <img 
                        src={burgerImage} 
                        alt="Logo" 
                    />
                </Link>
                <h1>
                    <Link 
                        to="/about" 
                        className={activeTab === 'About' ? 'tab active' : 'tab'} 
                        onClick={() => handleClick('About')}
                    >
                        Brrrgrrr
                    </Link>
                </h1>
            </div>

            <div className="nav">
                <ul>
                    <Link 
                        to= "/search"
                    >
                        <li 
                            className={activeTab === 'Search' ? 'tab active search' : 'tab search'} 
                            onClick={() => handleClick('Search')}
                        >
                            <img 
                                className="search-icon" 
                                src={searchImage} 
                                alt="search"
                            />
                                Search
                        </li>
                    </Link>

                    <Link 
                        to="/orders"
                    >
                        <li 
                            className={activeTab === 'Orders' ? 'tab active' : 'tab'} 
                            onClick={() => handleClick('Orders')}
                        >
                            My Orders
                        </li>
                    </Link>
                    
                    <Link 
                        to="/account">
                        <li 
                            className={activeTab === 'Account' ? 'tab active' : 'tab'} 
                            onClick={() => handleClick('Account')}
                        >
                            My Account
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
