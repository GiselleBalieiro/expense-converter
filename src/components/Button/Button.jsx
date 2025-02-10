import React from "react";
import "./Button.css";

const Button = ({ showForm, setShowForm }) => {
  const handleClick = () => {
    setShowForm(!showForm)
  };

  return <button onClick={handleClick}>Cadastrar Despesas</button>;
};

export default Button;