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
     <input type="text" className="input neuflip p-2 m-2" value={converting} onChange={onChangeConverting} />
     <select className="neu p-2 m-2" value={selectedCurrency} onChange = {onChangeCurrency}>
       {currencyOptions.map(option => (
       <option key={option} value={option}>{option}</option>
       ))}
     </select>  
    </div>
  )
}