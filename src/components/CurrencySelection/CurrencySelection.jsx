import React from 'react';
import './CurrencySelection.css';

const CurrencySelection = ({  }) =>{
    return (
        <>
        <select 
          id='option' 
          name='option' 
          onChange={(event) => 
            setOption(event.target.value)}>
                    
            <option value=''>Selecione</option>
            <option value='BRL'>Real</option>
            <option value='USD'>Dólar</option>
            <option value='EUR'>Euro</option> 
        </select>
        </>
    )
}

export default CurrencySelection;