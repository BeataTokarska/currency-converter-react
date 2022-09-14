import React, { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result, setResult }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

        const onReset = () => {
            setResult('');
            setAmount('');
        }
    

    return (
        <form className="converter" onSubmit={onSubmit} onReset={onReset}>
            <fieldset className="converter__fieldset">
                <legend className="converter__title">
                    Prosty przelicznik walut
                </legend>

                <p>
                    <label>
                        <span>
                            Wybierz walutę:
                        </span>

                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}

                                </option>
                            )))}
                        </select>
                    </label>
                </p>

                <p>
                    <label>
                        <span>
                            wpisz kwotę w zł:
                        </span>

                        <input
                            value={amount}
                            onChange={({ target }) => setAmount(target.value)}
                            type="number"
                            // value="0.00" 
                            name="amountPLN"
                            required
                            min="0.00"
                            step="0.01"
                        />
                    </label>
                </p>
            </fieldset>
            <p className="converter__buttonContainer">
                <button>Przelicz</button>
                <button type="reset">Wyczyść</button>
            </p>
            <p>Otrzymana wartość: <strong>
                <Result result={result} /></strong></p>

        </form >
    )
};


export default Form;
