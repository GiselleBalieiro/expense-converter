import React, { useEffect, useState } from 'react';
import './CurrencySelection.css';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const CurrencySelection = ({ expenses, exchangeRates, setDestinationCurrency, setExchangeRates, fromCurrency, onConversion }) => {
  const [toCurrency, setToCurrency] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${fromCurrency}`);
        const data = await response.json();

        if (data.conversion_rates) {
          setExchangeRates(data.conversion_rates);
          setDestinationCurrency(toCurrency);
          setLoading(false)
        } else {
          throw new Error("Erro ao buscar taxas.");
        }
      } catch (error) {
        setExchangeRates({});
        setLoading(false)
      }
    }
    if (toCurrency) {
      fetchExchangeRates();
    }
  }, [toCurrency, setExchangeRates, setDestinationCurrency, fromCurrency]);

  

  const calculateConvertedTotal = () => {
    if (expenses.length === 0) {
      return "Por favor, adicione uma despesa antes de calcular a conversão.";
    }
    
    const fromExchangeRate = exchangeRates[fromCurrency];
    const toExchangeRate = exchangeRates[toCurrency];

    const convertedExpenses = expenses.map((expense) => {
      if (expense.option === fromCurrency) {
        const convertedValue = (expense.value / fromExchangeRate) * toExchangeRate;
        return {
          ...expense,
          convertedValue: convertedValue.toFixed(2),
          conversionCurrency: toCurrency
        };
      }
      return expense;
    });
    
    onConversion(convertedExpenses);
  };

  return (
    <div>
      <form className='form-converted' onSubmit={calculateConvertedTotal}>
      <label className='label-converted'>Converter despesas para: </label>
      <select className="select-submit" required 
        value={toCurrency} 
        onChange={(e) => setToCurrency(e.target.value)}>
        <option value="" disabled>Selecione</option>
        <option value="USD">Dólar</option>
        <option value="BRL">Real</option>
        <option value="EUR">Euro</option>
      </select>
      <button type='submit' disabled={loading}>Converter</button>
      </form>   
    </div>
  );
};

export default CurrencySelection;
