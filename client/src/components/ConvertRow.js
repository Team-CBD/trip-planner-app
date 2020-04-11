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
     <input type="number" className="numberInput m-2 p-2 neuflip" value={converting} onChange={onChangeConverting} />
     <select className="neu" value={selectedCurrency} onChange = {onChangeCurrency}>
       {currencyOptions.map(option => (
       <option key={option} value={option}>{option}</option>
       ))}
     </select>  
    </div>
  )
}