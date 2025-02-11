import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm/ExpenseForm'
import ExpenseList from './components/ExpenseList/ExpenseList'
import Button from './components/Button/Button';
import PopUp from './components/PopUp/PopUp';
import Background from './components/Background/Background';


function App() {
  const [ expenses, setExpenses ] = useState([]);
  const [ destinationCurrency, setDestinationCurrency ] = useState ("");
  const [ exchangeRates, setExchangeRates ] = useState ({});
  const [ selectedCurrency, setSelectedCurrency ] = useState ('')
  const [ showForm, setShowForm ] = useState (false);
 
  return (
    <>
    <Background>
      <Button 
        showForm={showForm} 
        setShowForm={setShowForm}
      />
      
      {showForm && ( <PopUp setShowForm={setShowForm}>  
        <ExpenseForm 
          expenses={expenses} 
          setSelectedCurrency={setSelectedCurrency}
          setExpenses={setExpenses}
          destinationCurrency={destinationCurrency}
          exchangeRates={exchangeRates}
          setShowForm={setShowForm}
        />
      </PopUp>
      )} 

      <ExpenseList 
        expenses={expenses} 
        setExpenses={setExpenses} 
        exchangeRates={exchangeRates}
        setDestinationCurrency={setDestinationCurrency}
        setExchangeRates={setExchangeRates}
        selectedCurrency={selectedCurrency}
        fromCurrency={selectedCurrency}
      />
      
    </Background>
    </>
  )
}

export default App
