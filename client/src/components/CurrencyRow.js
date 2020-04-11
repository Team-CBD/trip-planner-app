import React from "react";

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (
    <div>
     <input type="number" className="input numberInput m-2 p-2 neuflip" value={amount} onChange={onChangeAmount} />
     <select className="neu" value={selectedCurrency} onChange = {onChangeCurrency}>
       {currencyOptions.map(option => (
       <option key={option} value={option}>{option}</option>
       ))}
     </select>  
    </div>
  )
}