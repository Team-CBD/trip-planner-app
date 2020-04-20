import React, { useEffect, useState } from 'react';
import Row from './Row';
import '../styles/Converter.css';
// import SelectRow from './SelectRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function Convertor() {
    console.log("convertor");
  const converterOptions = ["currency", "temperature", "mass", "length"]
  // eslint-disable-next-line
  const [selectedConverter, setSelectedConverter] = useState(converterOptions[0])
  const [options, setOptions] = useState([])
  const [fromValue, setFromValue] = useState()
  const [toValue, setToValue] = useState()
  const [amount, setAmount] = useState(1)

  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)
  const [exchangeRate, setExchangeRate] = useState()

  let toAmount, fromAmount


    
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(2)
  }


  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[27];
        const secondCurrency = Object.keys(data.rates)[26]
        setOptions([data.base, ...Object.keys(data.rates)]);
        setFromValue(secondCurrency);
        setToValue(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
      });
  }, []);

  useEffect(() => {
    if (fromValue != null && toValue != null) {
      fetch(`${BASE_URL}?base=${fromValue}&symbols=${toValue}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toValue]))
    }
  }, [fromValue, toValue])
  

  

  function handleFromAmountChange(e) {
    if (selectedConverter==="currency"){
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
    }
  }
  function handleToAmountChange(e) {
    if (selectedConverter==="currency"){
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
    }
  }
  // function handleConverterChange(e) {
  //   console.log(e.target.value);
  //   setSelectedConverter(e.target.value)
  // }
  return (
    <div className="justify-content-center pb-5">
    {/* <h2 className="ptitle text-dark pb-3">Tools</h2> */}
      

 
           {/* <SelectRow 
            selectedConverter = {selectedConverter}
            handleConverterChange = {handleConverterChange}
            converterOptions={converterOptions}/> */}
            
            <div className="converter card shadow bg-light p-4">
              <div className="card-title">Currency Convertor</div>
              <Row
                options={options}
                selectedValue={fromValue}
                onChangeValue={e => setFromValue(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount} />
              <div className="equals">=</div>
              <Row
                options={options}
                selectedValue={toValue}
                onChangeValue={e => setToValue(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount} />
            </div>
          </div>
     

    
    
  );
}

export default Convertor;
