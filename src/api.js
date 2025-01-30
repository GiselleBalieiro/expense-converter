const API_KEY = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
const BASE_URL = "https://v6.exchangerate-api.com/v6";

export async function getExchangeRate(fromCurrency, toCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${fromCurrency}`);
    const data = await response.json();
    
    if (data.conversion_rates && data.conversion_rates[toCurrency]) {
      return data.conversion_rates[toCurrency];
    } else {
      throw new Error("Taxa de câmbio não encontrada.");
    }
  } catch (error) {
    console.error("Erro ao buscar taxa de câmbio:", error);
    return null;
  }
}
