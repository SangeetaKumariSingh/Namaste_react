import React from "react";
import ReactDOM from "react-dom/client";
import download from "url:./src/assets/images/download.jpg";
import logo from "url:./src/assets/images/logo.png";
// import userIcon from "./src/assets/userIcon.png"; // Create React Root
const root = ReactDOM.createRoot(document.getElementById("root"));
//! Ques Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”) and same with jsx
// React Element using React.createElement()
const heading = React.createElement("div", { className: "mainheading" }, [
  React.createElement("h1", { key: "1" }, "Heading One"),
  React.createElement("h2", { key: "2" }, "Heading Two"),
  React.createElement("h3", { key: "3" }, "Heading Three"),
]);

// root.render(heading);

// Functional Component using JSX
const JsxHeading = () => {
  return (
    <div className="divMain">
      <h1>Heading One from Functional Component using JSX</h1>
      <h2>Heading Two from Functional Component using JSX</h2>
      <h3>Heading Three from Functional Component using JSX</h3>
    </div>
  );
};

// JSX React Element
const JsxHeading2 = (
  <div className="divMain">
    <h1>Heading One - JsxHeading2</h1>
    <h2>Heading Two - JsxHeading2</h2>
    <h3>Heading Three - JsxHeading2</h3>
    {/* component Composition */}
    <JsxHeading />
  </div>
);

// Render JSX React Element
// root.render(JsxHeading2);
console.log("image", logo);
console.log("Hello React");

// ! Ques Create a Header Component from scratch using Functional Components with JSX, Add a Logo,Add a search bar in middle,Add User icon on right.

const Header = () => {
  return (
    <div className="header">
      <div className="logoIcon">
        <p align="left">
          <img src={download} width="100px" height="100px" alt="Logo" />
        </p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">
        <img src={logo} height="100px" alt="User Icon" />
      </div>
    </div>
  );
};
// Render Header Component
root.render(<Header />);
