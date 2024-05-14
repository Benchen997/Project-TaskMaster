import "./css/Add.css";
import React from "react";

// passing onclick function as a prop to parent component
function Add({onClick}) {
  return (
    <button className="add-btn" onClick={onClick}>
        <i className="glyphicon glyphicon-plus-sign">   
        </i>
    </button>
 
  );
}

export default Add;