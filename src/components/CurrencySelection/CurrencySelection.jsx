import React, { useEffect, useState } from 'react';
import './CurrencySelection.css';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const CurrencySelection = ({ setDestinationCurrency, setExchangeRates }) => {
  const [toCurrency, setToCurrency] = useState("");
  const [ totalConverted, setTotalConverted ] = useState("");

  const calculateConvertedTotal = ({ expenses, exchangeRate }) => {
    if (!exchangeRate) {
      return "Não há taxa de conversão, por favor, selecione outra";
    }
  
    const convertedExpenses = expenses.map((expense) => {
      if (expense.option) {
        return expense.value * exchangeRate;
      } else {
        return "Não há taxa de conversão, por favor, selecione outra";
      }
    });
  
    return convertedExpenses;
  };
  

  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${toCurrency}`);
        const data = await response.json();

        if (data.conversion_rates) {
          setExchangeRates(data.conversion_rates); 
          setDestinationCurrency(toCurrency); 
        } else {
          throw new Error("Erro ao buscar taxas.");
        }
      } catch (error) {
        console.error("Erro ao buscar taxas de câmbio:", error);
        setExchangeRates({});
      }
    }

    fetchExchangeRates();
  }, [toCurrency, setExchangeRates, setDestinationCurrency]);

  return (
    <div>
      <label>para: </label>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">Dólar</option>
        <option value="BRL">Real</option>
        <option value="EUR">Euro</option>
      </select>
      <button onClick={() => console.log(calculateConvertedTotal({ expenses: [{ value: 100, option: true }], exchangeRate: 5 }))}>Converter</button>
    </div>
  );
};

export default CurrencySelection;
