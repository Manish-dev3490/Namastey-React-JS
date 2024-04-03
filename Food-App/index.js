import React from "react";
import ReactDOM from "react-dom/client";

// Now we are going to make the basic food app for practicing the components props and some other react tools for making our foundation strong 


// this is the main root which fetched from html file
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));



// this is the data i have borrow from some apis for practice 
const resObject = [

    {
        "id": 21,
        "title": "- Daal Masoor 500 grams",
        "description": "Fine quality Branded Product Keep in a cool and dry place",
        "price": 20,
        "discountPercentage": 4.81,
        "rating": 4.44,
        "stock": 133,
        "brand": "Saaf & Khaas",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
        "images": [
            "https://cdn.dummyjson.com/product-images/21/1.png",
            "https://cdn.dummyjson.com/product-images/21/2.jpg",
            "https://cdn.dummyjson.com/product-images/21/3.jpg"
        ]
    },

    {
        "id": 22,
        "title": "Elbow Macaroni - 400 gm",
        "description": "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
        "price": 14,
        "discountPercentage": 15.58,
        "rating": 4.57,
        "stock": 146,
        "brand": "Bake Parlor Big",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/22/1.jpg",
            "https://cdn.dummyjson.com/product-images/22/2.jpg",
            "https://cdn.dummyjson.com/product-images/22/3.jpg"
        ]
    },
    {
        "id": 23,
        "title": "Orange Essence Food Flavou",
        "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
        "price": 14,
        "discountPercentage": 8.04,
        "rating": 4.85,
        "stock": 26,
        "brand": "Baking Food Items",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/23/1.jpg",
            "https://cdn.dummyjson.com/product-images/23/2.jpg",
            "https://cdn.dummyjson.com/product-images/23/3.jpg",
            "https://cdn.dummyjson.com/product-images/23/4.jpg",
            "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
        ]
    },
    {
        "id": 24,
        "title": "cereals muesli fruit nuts",
        "description": "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
        "price": 46,
        "discountPercentage": 16.8,
        "rating": 4.94,
        "stock": 113,
        "brand": "fauji",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/24/1.jpg",
            "https://cdn.dummyjson.com/product-images/24/2.jpg",
            "https://cdn.dummyjson.com/product-images/24/3.jpg",
            "https://cdn.dummyjson.com/product-images/24/4.jpg",
            "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
        ]
    },
    {
        "id": 25,
        "title": "Gulab Powder 50 Gram",
        "description": "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
        "price": 70,
        "discountPercentage": 13.58,
        "rating": 4.87,
        "stock": 47,
        "brand": "Dry Rose",
        "category": "groceries",
        "thumbnail": "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/25/1.png",
          "https://cdn.dummyjson.com/product-images/25/2.jpg",
          "https://cdn.dummyjson.com/product-images/25/3.png",
          "https://cdn.dummyjson.com/product-images/25/4.jpg",
          "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
        ]
      }


]


// lets make the header commponent
const Headercomponent = () => {
    return (
        <header className="header">
            <div className="logo-box">

                <h2>Food Paradise</h2>
            </div>


            <ul className="nav-items">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>

        </header>
    )
}


// lets make the reastuarent card commponent which we have to re use again and again with static and dynamic data
const Restacard = (props) => {

    const { resData } = props;
    const { title, category, rating,images } = resData;

    return (
        <div className="resta-card">
            <img src={images[1]}></img>


            <div className="info-section">
                <h2>{title}</h2>
                <h3>Delivery  <i class="ri-star-fill"></i>    20-25 min</h3>
                <p>{category}</p>
                <p>{rating}</p>
            </div>
        </div>
    )
}


// lets make  the body component for the hero section of the application
const BodyComponent = () => {
    return (
        <div className="hero-section">
            <div className="search-bar">
                <input type="text"></input>
                <button>Search</button>
            </div>

            <div className="restaurent-box">
                <Restacard resData={resObject[0]} />
                <Restacard resData={resObject[1]} />
                <Restacard resData={resObject[2]} />
                <Restacard resData={resObject[3]} />
                <Restacard resData={resObject[4]} />

                
            </div>


        </div>
    )
}

// Lets make a Main Application component in which all component will include
const MainApplicationComponent = () => {
    return (
        <div className="container">
            {Headercomponent()}
            {BodyComponent()}
        </div>
    )
}

rootElement.render(<MainApplicationComponent />);