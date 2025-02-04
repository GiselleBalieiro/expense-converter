import { useState } from 'react';
import './App.css'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'
import CurrencySelection from './components/CurrencySelection/CurrencySelection';

function App() {
  const [ expenses, setExpenses ] = useState([]);
  const [ destinationCurrency, setDestinationCurrency ] = useState ("");
  const [ exchangeRates, setExchangeRates ] = useState ({});
  const [ selectedCurrency, setSelectedCurrency ] = useState ('')


  return (
    <>
    <ExpenseForm 
      expenses={expenses} 
      setSelectedCurrency={setSelectedCurrency}
      setExpenses={setExpenses}
      destinationCurrency={destinationCurrency}
      exchangeRates={exchangeRates}
    />
    <ExpenseList 
      expenses={expenses} 
      setExpenses={setExpenses} 
    />
    <CurrencySelection
      expenses={expenses}
      exchangeRates={exchangeRates}
      setDestinationCurrency={setDestinationCurrency}
      setExchangeRates={setExchangeRates}
      fromCurrency={selectedCurrency}
    />
    </>
  )
}

export default App
