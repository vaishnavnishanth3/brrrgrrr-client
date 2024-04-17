import React, { useState, useEffect } from "react"
import axios from "axios"

import "./Orders.css"

  const burgerList = {
    "burgers": [
        {
            "key":1,
            "id":1,
            "name": "Classic Burger",
            "description": "A timeless favorite with a juicy beef patty, lettuce, tomato, onion, pickles, and ketchup.",
            "price": 150,
            "image": "https://th.bing.com/th/id/OIP.foUc1lQc_Z5OvIfsyd8UFgHaGo?w=209&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "key":2,
            "id":2,
            "name": "BBQ Bacon Burger",
            "description": "A hearty burger topped with crispy bacon, cheddar cheese, tangy BBQ sauce, lettuce, and onion rings.",
            "price": 200,
            "image": "https://th.bing.com/th/id/OIP.I3215PJr8dGyEnT-rDvBZQHaFj?rs=1&pid=ImgDetMain"
        },
        {
            "key":3,
            "id":3,
            "name": "Mushroom Swiss Burger",
            "description": "A savory burger featuring sautéed mushrooms, melted Swiss cheese, lettuce, and garlic aioli.",
            "price": 175,
            "image": "https://th.bing.com/th/id/OIP.WxRBKh-LJ1TY7Yd9U5yDTgHaE8?rs=1&pid=ImgDetMain"
        },
        {
            "key":4,
            "id":4,
            "name": "Veggie Burger",
            "description": "A delicious plant-based patty topped with avocado, sprouts, tomato, lettuce, and vegan mayo.",
            "price": 160,
            "image": "https://th.bing.com/th/id/R.1ec1a9ea4f552bff085f2e0139f15b78?rik=HfojCnsjcYi7tQ&pid=ImgRaw&r=0"
        },
        {
            "key":5,
            "id":5,
            "name": "Spicy Jalapeño Burger",
            "description": "A fiery burger with jalapeño slices, pepper jack cheese, lettuce, tomato, and spicy mayo.",
            "price": 165,
            "image": "https://th.bing.com/th/id/OIP.52_fyiv0z7xebdlbWxyJmQAAAA?w=300&h=300&rs=1&pid=ImgDetMain"
        },
        {
            "key":6,
            "id":6,
            "name": "Double Cheeseburger",
            "description": "Twice the cheesy goodness with two beef patties, American cheese, lettuce, tomato, and special sauce.",
            "price": 400,
            "image": "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg"
        },
        {
            "key":7,
            "id":7,
            "name": "California Burger",
            "description": "A taste of the West Coast with avocado, bacon, Swiss cheese, lettuce, tomato, and chipotle mayo.",
            "price": 350,
            "image": "https://th.bing.com/th/id/OIP.zXeCVdxH5HRlZjJDabHkXgHaGs?rs=1&pid=ImgDetMain"
        },
        {
            "key":8,
            "id":8,
            "name": "Teriyaki Pineapple Burger",
            "description": "A tropical twist with teriyaki-glazed grilled pineapple, grilled chicken breast, lettuce, and mayo.",
            "price": 300,
            "image": "https://th.bing.com/th/id/OIP.JxE_H2EI-LZCERIgXZdaOQHaHa?rs=1&pid=ImgDetMain"
        },
        {
            "key":9,
            "id":9,
            "name": "Buffalo Chicken Burger",
            "description": "A spicy kick with buffalo sauce, crispy fried chicken breast, lettuce, tomato, and ranch dressing.",
            "price": 310,
            "image": "https://assets-prd-weg.unataops.com/web/recipe_header/02e8b2e0902541b88090400e18d61339.jpg"
        },
        {
            "key":10,
            "id":10,
            "name": "Southwest Black Bean Burger",
            "description": "A flavorful vegetarian option with a black bean patty, roasted corn salsa, lettuce, and chipotle aioli.",
            "price": 175,
            "image": "https://audreydunham.com/wp-content/uploads/2016/07/IMG_7989.jpg"
        },
        {
            "key":11,
            "id":11,
            "name": "Bacon Avocado Burger",
            "description": "A mouthwatering combination of crispy bacon, creamy avocado, lettuce, tomato, and tangy mayo.",
            "price": 220,
            "image": "https://holyschnitzel.com/wp-content/uploads/2018/12/Bacon-Avocado-Burger-1024x683.jpg"
        },
        {
            "key":12,
            "id":12,
            "name": "Cajun Chicken Burger",
            "description": "A spicy Cajun-seasoned grilled chicken breast topped with pepper jack cheese, lettuce, and spicy mayo.",
            "price": 230,
            "image": "https://th.bing.com/th/id/R.08566e8beb5c16e014047f4f7063fa31?rik=zNCnOdUcJ4KCjA&riu=http%3a%2f%2fcdn.cdkitchen.com%2frecipes%2fimages%2f2021%2f04%2f41732-9542-mx.jpg&ehk=xTf7oInSHdgGiBxfoVd4fG%2fDWhH%2fBwq2IZUjxyTzvBc%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            "key":13,
            "id":13,
            "name": "Caprese Burger",
            "description": "A gourmet burger featuring a beef patty topped with fresh mozzarella, ripe tomatoes, basil leaves, and balsamic glaze.",
            "price": 270,
            "image": "https://oursaltykitchen.com/wp-content/uploads/2022/08/caprese-chicken-burger-featured-image.jpg"
        },
        {
            "key":14,
            "id":14,
            "name": "Guacamole Turkey Burger",
            "description": "A healthy option with a turkey patty, guacamole, lettuce, tomato, and red onion on a whole grain bun.",
            "price": 190,
            "image": "https://th.bing.com/th/id/R.cb6e772d1cbc81eda697637da5f8d7cd?rik=f2ajT9Rd7dPdag&riu=http%3a%2f%2fd2814mmsvlryp1.cloudfront.net%2fwp-content%2fuploads%2fBHG-Burger-3-copy1.jpg&ehk=we7iquXXCoT7yKzX2WcukFhY0ZMocoMq5OQ3fqh0eZQ%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            "key":15,
            "id":15,
            "name": "Mediterranean Lamb Burger",
            "description": "A flavorful lamb patty seasoned with Mediterranean spices, topped with feta cheese, tzatziki sauce, lettuce, and cucumber slices.",
            "price": 300,
            "image": "https://th.bing.com/th/id/R.9715a98b3fc34646abf99ef787c78682?rik=H6D9KySdkurGeg&pid=ImgRaw&r=0"
        },
        {
            "key":16,
            "id":16,
            "name": "Portobello Mushroom Burger",
            "description": "A vegetarian delight featuring a grilled portobello mushroom cap topped with roasted red peppers, caramelized onions, provolone cheese, and balsamic glaze.",
            "price": 220,
            "image": "https://healthyhealingeats.com/wp-content/uploads/2023/07/portobello-mushroom-burgers-scaled.jpeg"
        },
        {
            "key":17,
            "id":17,
            "name": "Thai Peanut Burger",
            "description": "An exotic burger topped with Thai peanut sauce, grilled pineapple, crispy fried onions, and cilantro.",
            "price": 250,
            "image": "https://www.babaganosh.org/wp-content/uploads/2021/01/taco-burgers-21-335x335.jpg"
        },
        {
            "key":18,
            "id":18,
            "name": "Truffle Mushroom Burger",
            "description": "An indulgent burger featuring sautéed mushrooms in truffle oil, truffle aioli, arugula, and shaved Parmesan cheese.",
            "price": 380,
            "image": "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps36597_SD153319C10_07_6b.jpg"
        },
        {
            "key":19,
            "id":19,
            "name": "Hawaiian Teriyaki Burger",
            "description": "A taste of the islands with teriyaki-glazed grilled pineapple, ham, Swiss cheese, lettuce, and teriyaki mayo.",
            "price": 280,
            "image": "https://th.bing.com/th/id/R.3deb57b0d21a6b9068283177823aeb9d?rik=BQ4uwX9M1XvH9w&pid=ImgRaw&r=0"
        },
        {
            "key":20,
            "id":20,
            "name": "Mexican Chorizo Burger",
            "description": "A spicy burger featuring a chorizo-infused beef patty, pepper jack cheese, avocado, lettuce, tomato, and chipotle mayo.",
            "price": 320,
            "image": "https://media-cdn.tripadvisor.com/media/photo-s/11/f1/e5/43/smoked-bacon-jam-burger.jpg"
        }   
    ]
}

export default function Orders() 
{
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [orders, setOrders] = useState([])

    const handleCancel = async (index) => 
    {
        try 
        {
            const email = JSON.parse(localStorage.getItem("user")).userData.email
            const response = await axios.post(`orders/delete-order/${email}/${index}`)
            setOrders(response.data.user.orders)
            console.log("Order canceled")
        } 
        catch (error) 
        {
            console.error("Error canceling order:", error)
        }
    };

    useEffect(() => 
        {   
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.userData) 
            {
                setIsLoggedIn(true);
                const userOrders = user.userData.orders;
                setOrders(userOrders);
            }
        }, []
    );

    return (
      <div className="orders">
      {
            isLoggedIn && orders.length > 0 ? (
                <div>
                    <h1>Order Details</h1>
                    <div>
                        {
                            orders.length > 0 ? (
                                <div className="orders-made">
                                    {
                                        orders.map((order, index) => 
                                        {
                                            const burger = burgerList.burgers.find(b => b.name === order.name);
                                            return (
                                                <div 
                                                    className="individual-order" 
                                                    key={index}
                                                >
                                                        <div className="description">
                                                            <h3>{order.name}</h3>

                                                            <p>₹ {burger.price}</p>
                                                        </div>

                                                        <div className="image">
                                                            <img 
                                                                src={burger.image} 
                                                                alt={order.name} 
                                                            />
                                                        </div>
                                                        
                                                        <button 
                                                            className="cancel-button" 
                                                            onClick={() => handleCancel(index)}
                                                        >
                                                            Cancel Order
                                                        </button>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                        ) : (
                            <h1>No orders found</h1>
                        )}
                    </div>
                </div>
      ) : isLoggedIn && orders.length === 0 ? (
                <div>                 
                    <div className="orders-listed">
                        <div className="orders-made">
                        <h3>
                            No orders made yet!
                        </h3>
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
  </div>
  
  )
}
