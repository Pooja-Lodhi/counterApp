import React from "react";
// import "./Body.css"; // Importing the CSS file

const Body = (props) => {
  return (
    <div className="body-container">
      <h1 className="body-heading">Welcome to My Website {props.Car}</h1>
      <p className="body-text">
        This is a simple React application demonstrating how to use JSX and CSS
        separately.
      </p>
      <button className="body-button">Learn More</button>
    </div>
  );
};

export default Body;
