import { useState, useMemo } from "react";

function CurrencyConverter() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");

    const exchangeRates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 156.7,
    };

    const convertedAmount = useMemo(() => {
        return amount / exchangeRates[fromCurrency]
    }, [amount, fromCurrency]);

    const finalAmount = convertedAmount * exchangeRates[toCurrency];

    return(<div className="converter">
        <h1>Currency Converter</h1>
        <p>Convert your money in seconds.</p>

        <label htmlFor="amount">Amount</label>
        <input
            id="amount"
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
        />

        <div className="currency-selectors">
            <div>
            <label htmlFor="from-currency">From</label>
            <select
                id="from-currency"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
            </div>

            <div>
            <label htmlFor="to-currency">To</label>
            <select
                id="to-currency"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
            >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
            </select>
            </div>
        </div>

        <div className="result" aria-live="polite">
            <p>You will receive</p>
            <h2>
                {finalAmount.toFixed(2)} {toCurrency}
            </h2>
        </div>
        </div>)
}
export default CurrencyConverter;