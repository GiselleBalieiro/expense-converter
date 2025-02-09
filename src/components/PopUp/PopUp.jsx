import React from "react";
import "./PopUp.css";
const PopUp = ({setShowForm, showForm, children}) => {

  const handleClick = () => {
    setShowForm(showForm)
  }
  return (
    <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={handleClick}>X</button>
      {children}
    </div>
    </div>
  )
}

export default PopUp;