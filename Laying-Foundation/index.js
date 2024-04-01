import React from "react";
import  ReactDOM  from "react-dom/client";

const root =ReactDOM.createRoot(document.querySelector(".container"));
const firstHeading=<h1 className="heading"> Hello I am writing JSX</h1>;

root.render(firstHeading);