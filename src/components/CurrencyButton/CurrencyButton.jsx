import React, { useState } from "react";
import CurrencySelection from "../CurrencySelection/CurrencySelection";
import PopUp from "../PopUp/PopUp";

const CurrencyButton = ({  expenses, setExpenses, exchangeRates, setDestinationCurrency, setExchangeRates, fromCurrency, onConversion }) => {
    const [showCurrencySelection, setShowCurrencySelection] = useState (false);

    const handleButtonClick = () => {
        setShowCurrencySelection(!showCurrencySelection)
    };

    const handleConversion = (convertedExpenses) => {
        onConversion(convertedExpenses);
        setShowCurrencySelection(false);
    };

    return (
        <div>
        <button className="convert-button" onClick={handleButtonClick}>Converter</button>
        {showCurrencySelection && (
            <PopUp setShowForm={setShowCurrencySelection}>
                <CurrencySelection
                    expenses={expenses}
                    exchangeRates={exchangeRates}
                    setDestinationCurrency={setDestinationCurrency}
                    setExchangeRates={setExchangeRates}
                    fromCurrency={fromCurrency}
                    onConversion={handleConversion}
                />
            </PopUp>
        )}
        </div>
    )
}

export default CurrencyButton;