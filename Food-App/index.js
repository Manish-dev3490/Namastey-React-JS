import React from "react";
import ReactDOM from "react-dom/client";

// Now we are going to make the basic food app for practicing the components props and some other react tools for making our foundation strong 


// this is the main root which fetched from html file
const rootElement = ReactDOM.createRoot(document.querySelector(".root"));



// lets make the header commponent
const Headercomponent=()=>{
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



// Lets make a Main Application component in which all component will include
const MainApplicationComponent = () => {
return (
    <div className="container">
        <Headercomponent/>
    </div>
)
}

rootElement.render(<MainApplicationComponent/>);