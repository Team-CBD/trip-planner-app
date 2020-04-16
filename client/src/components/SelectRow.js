import React from "react";

export default function SelectRow(props) {
    
  const handleChange = (event) => {
       props.handleConverterChange(event)
        
      }

    return (
        <div>
            <select className="neu" value={props.selectedConverter} onChange={handleChange}>
        {props.converterOptions.map(option => ( 
       <option key={option} value={option}>{option}</option>
       ))} 
            </select>
        </div>
    )
}