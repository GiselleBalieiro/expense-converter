import React, { useEffect, useState } from 'react';
import './CurrencySelection.css';

const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const CurrencySelection = ({ expenses, exchangeRates, setDestinationCurrency, setExchangeRates }) => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("");
  const [totalConverted, setTotalConverted] = useState([]);

  useEffect(() => {
    async function fetchExchangeRates() {
      try {
        const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${fromCurrency}`);
        const data = await response.json();

        console.log(data)
        console.log("Moeda selecionada: ", fromCurrency)

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

    if (toCurrency) {
      fetchExchangeRates();
    }
  }, [toCurrency, setExchangeRates, setDestinationCurrency]);


  useEffect(() => {
    console.log("Taxas de câmbio atualizadas:", exchangeRates);
  }, [exchangeRates]);
  

  const calculateConvertedTotal = () => {

    if (expenses.length === 0) {
      return "Por favor, adicione uma despesa antes de calcular a conversão.";
    }

    const fromExchangeRate = exchangeRates[fromCurrency];
    const toExchangeRate = exchangeRates[toCurrency];
    
    if (!fromExchangeRate || !toExchangeRate) {
      alert("Não há taxa de conversão para uma das moedas selecionadas.");
      return;
    }

    const convertedExpenses = expenses.map((expense) => {
      if (expense.option) {
        const convertedValue = (expense.value * toExchangeRate) / fromExchangeRate; 
        console.log(`Convertendo despesa: ${expense.value} de ${fromCurrency} para ${toCurrency}: ${convertedValue}`);
        return convertedValue;
      }
      return "Não há taxa de conversão, por favor, selecione outra";
    });

    console.log("Despesas convertidas:", convertedExpenses);
    setTotalConverted(convertedExpenses);
  };

  return (
    <div>
      <label>para: </label>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">Dólar</option>
        <option value="BRL">Real</option>
        <option value="EUR">Euro</option>
      </select>
      <button onClick={calculateConvertedTotal}>Converter</button>
      <p>O valor convertido é: {totalConverted.length ? totalConverted.join(', ') : "Ainda não convertido"}</p>
    </div>
  );
};

export default CurrencySelection;
