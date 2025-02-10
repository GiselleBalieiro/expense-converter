import React, { useState } from 'react';
import './ExpenseList.css';
import CurrencyButton from '../CurrencyButton/CurrencyButton';

const ExpenseList = ({ expenses, setExpenses, exchangeRates, setDestinationCurrency, setExchangeRates, selectedCurrency}) => {
    const [showCurrencySelection, setShowCurrencySelection] = useState(false);

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
                            <td className="buttons">
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemove(index)}
                                >
                                    Remover
                                </button>
                                <CurrencyButton className="convert-button"
                                    showCurrencySelection={showCurrencySelection}
                                    setShowCurrencySelection={setShowCurrencySelection}
                                    fromCurrency={selectedCurrency}
                                    expenses={expenses}
                                    exchangeRates={exchangeRates}
                                    setDestinationCurrency={setDestinationCurrency}
                                    setExchangeRates={setExchangeRates}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ExpenseList;
