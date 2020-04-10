import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeConverting,
    converting
  } = props
  return (
    <div>
     <input type="text" className="input" value={converting} onChange={onChangeConverting} />
     <select value={selectedCurrency} onChange = {onChangeCurrency}>
       {currencyOptions.map(option => (
       <option key={option} value={option}>{option}</option>
       ))}
     </select>  
    </div>
  )
}