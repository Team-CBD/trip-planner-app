import React, { useEffect, useState } from 'react';
import CurrencyRow from './CurrencyRow';
import '../styles/Converter.css';
import Weather from './Weather';

const BASE_URL = 'https://api.exchangeratesapi.io/latest'

function Convertor() {
    console.log("convertor");
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

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
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(secondCurrency);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency])
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }
  return (
    <div className="justify-content-center">
<h2 className="ptitle text-dark pb-3">Convert | Search</h2>
      <div className="container">

        <div className="row">
          <div className="col-sm-6">
          <h4 className="ptitle text-dark pb-3">Currency</h4>
            <div className="converter">
              <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={e => setFromCurrency(e.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount} />
              <div className="equals">=</div>
              <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={e => setToCurrency(e.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount} />
            </div>
          </div>
          <div className="col-sm-6 pt-5">
              <Weather />
          </div>
        </div>
      </div>
    </div>
    
    
  );
}

export default Convertor;
