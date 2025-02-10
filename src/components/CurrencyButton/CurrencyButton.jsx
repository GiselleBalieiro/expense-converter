import React, { useState } from "react";
import CurrencySelection from "../CurrencySelection/CurrencySelection";
import PopUp from "../PopUp/PopUp";

const CurrencyButton = ({  expenses, exchangeRates, setDestinationCurrency, setExchangeRates, fromCurrency }) => {
    const [showCurrencySelection, setShowCurrencySelection] = useState (false);

    const handleButtonClick = () => {
        setShowCurrencySelection(!showCurrencySelection)
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
                />
            </PopUp>
        )}
        </div>
    )
}

export default CurrencyButton;