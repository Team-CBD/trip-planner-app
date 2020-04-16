import React from "react";

export default function SelectRow(props) {
 
    const {

        // conversionOptions,
        // selectedConversion,
        // onChangeConversion,
        
      } = props
    return (
        <div>
         <select className="neu"value="options">
           {/* {conversionOptions.map(option => (
           <option key={option} value={option}>{option}</option>
           ))}{selectedConversion} onChange = {onChangeConversion}  */}
         </select>  
        </div>
      )
    }