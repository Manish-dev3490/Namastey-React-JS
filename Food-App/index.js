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
    },
    {
        "id": 26,
        "title": "Plant Hanger For Home",
        "description": "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        "price": 41,
        "discountPercentage": 17.86,
        "rating": 4.08,
        "stock": 131,
        "brand": "Boho Decor",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/26/1.jpg",
            "https://cdn.dummyjson.com/product-images/26/2.jpg",
            "https://cdn.dummyjson.com/product-images/26/3.jpg",
            "https://cdn.dummyjson.com/product-images/26/4.jpg",
            "https://cdn.dummyjson.com/product-images/26/5.jpg",
            "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
        ]
    },
    {
        "id": 27,
        "title": "Flying Wooden Bird",
        "description": "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        "price": 51,
        "discountPercentage": 15.58,
        "rating": 4.41,
        "stock": 17,
        "brand": "Flying Wooden",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
        "images": [
            "https://cdn.dummyjson.com/product-images/27/1.jpg",
            "https://cdn.dummyjson.com/product-images/27/2.jpg",
            "https://cdn.dummyjson.com/product-images/27/3.jpg",
            "https://cdn.dummyjson.com/product-images/27/4.jpg",
            "https://cdn.dummyjson.com/product-images/27/thumbnail.webp"
        ]
    },
    {
        "id": 28,
        "title": "3D Embellishment Art Lamp",
        "description": "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        "price": 20,
        "discountPercentage": 16.49,
        "rating": 4.82,
        "stock": 54,
        "brand": "LED Lights",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/28/1.jpg",
            "https://cdn.dummyjson.com/product-images/28/2.jpg",
            "https://cdn.dummyjson.com/product-images/28/3.png",
            "https://cdn.dummyjson.com/product-images/28/4.jpg",
            "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
        ]
    },
    {
        "id": 29,
        "title": "Handcraft Chinese style",
        "description": "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        "price": 60,
        "discountPercentage": 15.34,
        "rating": 4.44,
        "stock": 7,
        "brand": "luxury palace",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/29/thumbnail.webp",
        "images": [
            "https://cdn.dummyjson.com/product-images/29/1.jpg",
            "https://cdn.dummyjson.com/product-images/29/2.jpg",
            "https://cdn.dummyjson.com/product-images/29/3.webp",
            "https://cdn.dummyjson.com/product-images/29/4.webp",
            "https://cdn.dummyjson.com/product-images/29/thumbnail.webp"
        ]
    },
    {
        "id": 30,
        "title": "Key Holder",
        "description": "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        "price": 30,
        "discountPercentage": 2.92,
        "rating": 4.92,
        "stock": 54,
        "brand": "Golden",
        "category": "home-decoration",
        "thumbnail": "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
        "images": [
            "https://cdn.dummyjson.com/product-images/30/1.jpg",
            "https://cdn.dummyjson.com/product-images/30/2.jpg",
            "https://cdn.dummyjson.com/product-images/30/3.jpg",
            "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
        ]
    }


]


// lets make the header commponent
const Headercomponent = () => {
    return (
        <header className="header">
            <div className="logo-box">

                <h2>Random Products Paradise</h2>
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
    const { title, category, rating, images } = resData;

    return (
        <div className="resta-card">
            <img src={images[1]}></img>


            <div className="info-section">
                <h2>{title}</h2>
                <h3>Delivery  <i class="ri-star-fill"></i>20-25 min</h3>
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
             {resObject.map((resta,index)=>{
                console.log(index);
                return <Restacard key={index} resData={resta}></Restacard>
             })}
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