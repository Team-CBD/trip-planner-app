import React from "react";

export default function Row(props) {
  const {
    options,
    selectedValue,
    onChangeValue,
    onChangeAmount,
    amount
  } = props
  return (
    <div>
     <input type="number" className="input numberInput m-2 p-2 neuflip" value={amount} onChange={onChangeAmount} />
     <select className="neu" value={selectedValue} onChange = {onChangeValue}>
       {options.map(option => (
       <option key={option} value={option}>{option}</option>
       ))}
     </select>  
    </div>
  )
}