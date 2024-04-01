import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector(".container"));


// writing JSX
const firstHeading = <h1 className="heading"> Hello I am writing JSX</h1>;
const secondHeading = <h1 className="heading"> Hello I am writing JSX again</h1>;


// understanding function based commponents
const Makeheading = function () {
    return firstHeading;
}


const Makesubheading = () => {
    return secondHeading;
}
root.render(<Makeheading/>);

