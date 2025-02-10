import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses, setExpenses }) => {
    const handleRemove = (indexToRemove) => {
        setExpenses(expenses.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Despesa</th>
                        <th>Valor</th>
                        <th>Moeda</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense, index) => (
                        <tr key={index}>
                            <td>{expense.name}</td>
                            <td>{expense.value}</td>
                            <td>{expense.option}</td>
                            <td>
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
