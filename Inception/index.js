// Making the first react project of creating a element and render it into root

const makeHeading = React.createElement("h2", {}, "Hello World i am learning React Js");
const getRoot = ReactDOM.createRoot(document.querySelector(".root"));

getRoot.render(makeHeading);



// now making the second project which considered nested divs like this <div><h2></h2></div>
const makeNestedElements = React.createElement("div", { class: "firstDiv" }, [React.createElement("h2", {}, "Hello world "),
React.createElement("h2", {}, "Hello world 2")]);
getRoot.render(makeNestedElements);


