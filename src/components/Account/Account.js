import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";

function Account() {
    
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
    };

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    if (user) {
        return (
            <div className="account">
                <div className="action-area">
                    <div className="column1">
                        <h2>Welcome {user.userData.name}!</h2>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="column2">
                        <img src="https://th.bing.com/th/id/OIP.Li2rEtHXPADML-vULl6iowHaH0?rs=1&pid=ImgDetMain" alt="signin"/>
                    </div>
                </div>
            </div>
        );
    } else {
        // If user is not logged in, redirect to login page
        return  (<div className="account">
        <div className="action-area">
            <div className="column1">
                <div className="login-button"><Link to="/account/login"><button>Log In</button></Link></div>
                <div className="signup-button"><Link to="/account/signup"><button>Sign Up</button></Link></div>
            </div>
            <div className="column2">
                <img src="https://th.bing.com/th/id/OIP.Li2rEtHXPADML-vULl6iowHaH0?rs=1&pid=ImgDetMain" alt="signin"/>
            </div>
        </div>
    </div>);
    }
}

export default Account;
