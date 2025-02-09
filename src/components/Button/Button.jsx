import React from "react";

const Button = ({ showForm, setShowForm }) => {
  const handleClick = () => {
    setShowForm(!showForm)
  };

  return <button onClick={handleClick}>Cadastrar Despesas</button>;
};

export default Button;