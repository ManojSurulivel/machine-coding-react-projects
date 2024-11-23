import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Currency.css'; // Add some basic styling

const Currency = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies${from}.json`);
        setRates(response.data.conversion_rates);
      } catch (error) {
        console.error("Error fetching exchange rates: ", error);
      }
    };
    fetchRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (Object.keys(rates).length > 0) {
      setConvertedAmount((amount * rates[toCurrency]).toFixed(2));
    }
  }, [amount, toCurrency, rates]);

  return (
    <div className="currency-converter">
      <h1>Currency Converter</h1>
      <div className="converter-form">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {Object.keys(rates).map(currency => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="result">
        {amount} {fromCurrency} = {convertedAmount} {toCurrency}
      </div>
    </div>
  );
};

export default Currency;
