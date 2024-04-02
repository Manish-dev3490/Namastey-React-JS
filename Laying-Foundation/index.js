import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.querySelector(".container"));


// writing JSX
const firstHeading = <h1 className="heading"> Hello I am writing JSX</h1>;
const secondHeading = <h1 className="heading"> Hello I am writing JSX again</h1>;


// understanding function based commponents
const Makeheading =  ()=>{
    return firstHeading;
}


// component composition
const Makesubheading = () => {
 return  (
  <div className="containter-two">
    <Makeheading/>
    <h2>Hello ji</h2>
  </div>
 )
}
root.render(<Makesubheading/>);

