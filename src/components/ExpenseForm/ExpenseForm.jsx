import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({expenses, setExpenses}) => {
    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState('');
    const [ option, setOption ] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const newExpense = { name, value, option };
      setExpenses([...expenses, newExpense]);
    }; 

    console.log(expenses)

    return (
        <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome da despesa: </label>
        <input 
        type="text" 
        id="name" 
        name="name"
        value={name}
        onChange={(event) => 
          setName(event.target.value)}/>
        
        <label htmlFor="value">Valor: </label>
        <input 
          type="number" 
          id="value" 
          name="value"
          value={value}
          onChange={(event) => 
            setValue(event.target.value)}/>

        <label htmlFor="option">Selecione a moeda: </label>
        <select 
          id='option' 
          name='option' 
          onChange={(event) => 
            setOption(event.target.value)}>
                    
            <option value=''>Selecione</option>
            <option value='BRL'>Real</option>
            <option value='USD'>Dólar</option>
            <option value='EUR'>Euro</option> 
        </select>
          {option && <p>{option}</p>}
          <button type='submit'>Adicionar despesa</button>
      </form> 
        </>
    );
}

export default ExpenseForm;