import React from 'react';
import './Background.css';

const Background = ({children}) => {
  return (
    <div className="background-container">
      <div className="content-container">
        <h1 className="title">
          Gestor de Despesas Internacionais
        </h1>
        <p className="description">
          Organize e gerencie suas despesas de maneira eficiente com conversor de moedas.
        </p>
        {children}
      </div>
    </div>
  );
};

export default Background;
