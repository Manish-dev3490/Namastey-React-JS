import React from "react";
import ReactDOM from "react-dom/client";

// Now we are going to make the basic food app for practicing the components props and some other react tools for making our foundation strong 


// this is the main root which fetched from html file
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));



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
const Restacard=()=>{
    return(
        <div className="resta-card">
            <img src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg"></img>

            <div className="info-section">
                <h2>Chinese Wok</h2>
                <h3>3.8 <i class="ri-star-fill"></i>    20-25 min</h3>
                <p>Chinese,Asian,Tibetan</p>
                <p>Rajouri Garden</p>
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
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>
                <Restacard/>

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