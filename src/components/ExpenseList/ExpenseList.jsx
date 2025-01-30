import React from 'react';

const ExpenseList = ({ expenses, setExpenses }) => {
    const handleRemove = (indexToRemove) => {
            setExpenses(expenses.filter((_, index) => index !== indexToRemove));
        }
        
    return (
        <>
        <ul>
            {expenses.map((expense, index) => (
            <li key={index}>
                <p>{expense.name}</p>
                <p>{expense.value}</p>
                <p>{expense.option}</p>
                <button onClick={() => handleRemove(index)}>Remover</button>
            </li>
        ))}
        </ul>
        </>
    )
}

export default ExpenseList;
