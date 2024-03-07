// Making the first react project of creating a element and render it into root

const makeHeading=React.createElement("h2",{},"Hello World i am learning React Js");
const getRoot=ReactDOM.createRoot(document.querySelector(".root"));

getRoot.render(makeHeading);