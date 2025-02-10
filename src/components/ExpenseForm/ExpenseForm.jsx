import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ expenses, setExpenses, setSelectedCurrency, setShowForm }) => {
    const [ name, setName ] = useState('');
    const [ value, setValue ] = useState('');
    const [ option, setOption ] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      const newExpense = { name, value: parseFloat(value), option };
      setExpenses([...expenses, newExpense]);
      setName("");
      setValue("");
      setOption("");
      setSelectedCurrency(option)
      setShowForm(false)
    }; 

    console.log(expenses)

    return (
        <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <label className="label-submit" htmlFor="name">Nome da despesa: </label>
        <input className='input-submit' required
        type="text" 
        id="name" 
        name="name"
        value={name}
        onChange={(event) => 
          setName(event.target.value)}/>
        
        <label className="label-submit" htmlFor="value">Valor: </label>
        <input className='input-submit' required
          type="number" 
          id="value" 
          name="value"
          value={value}
          onChange={(event) => 
            setValue(event.target.value)}/>

        <label className="label-submit" htmlFor="option">Moeda da despesa: </label>
        <select className="select-submit" required
          id='option' 
          name='option' 
          value={option}
          onChange={(event) => 
            setOption(event.target.value)}>       
            <option value="" disabled >Selecione</option>
            <option value='BRL'>Real</option>
            <option value='USD'>Dólar</option>
            <option value='EUR'>Euro</option> 
        </select>
          <button className="button-submit" type='submit'>Adicionar despesa</button>
      </form> 
        </>
    );
}

export default ExpenseForm;