import { useState } from 'react';
import './App.css'
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'

function App() {
  const [ expenses, setExpenses ] = useState([]);

  return (
    <>
    <ExpenseForm 
      expenses={expenses} setExpenses={setExpenses}/>
    <ExpenseList 
      expenses={expenses} setExpenses={setExpenses} />
    </>
  )
}

export default App
