// installing npm and parcel , react and react dom for igniting our application
import React from "react";
import ReactDOM from "react-dom";


// Creating a project with JSX
// JSX is a easier and better way to create react element and it is like the html syntax 
const jsxheading=<h2 className="heading">Hello React JS</h2>;
const rootHome=ReactDOM.createRoot(document.querySelector(".root-container"));
rootHome.render(jsxheading);



