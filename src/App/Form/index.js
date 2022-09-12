import React, { useState } from "react";
import "./style.css";
import { currencies } from "../currencies";
import { Result } from "./Result";

export const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <form className="converter" onSubmit={onSubmit}>
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
                <button>Przelicz!</button>
                <button type="reset">Wyczyść</button>
            </p>
            <p>Otrzymana wartość: <strong>
            <Result result={result} /></strong></p>
            
        </form >
    )
};










// <form className="converter">
//     <fieldset className="converter__fieldset">
//         <legend className="converter__title">Prosty przelicznik walut</legend>
//         <p>
//             <label>
//                 Wybierz walutę:
//                 <select name="currency">
//                     <option value="USD">USD</option>
//                     <option value="GBP" selected>GBP</option>
//                     <option value="EUR">EUR</option>
//                 </select>
//             </label>
//         </p>

//         <p>
//             <label>
//                 wpisz kwotę w zł: <input  type="number" value="0.00" name="amountPLN" min="0.00"
//                     step="0.01"/>
//             </label>
//         </p>
//     </fieldset>
//     <p className="converter__buttonContainer">
//         <button>Przelicz</button>
//         <button type="reset">Wyczyść</button>
//     </p>
//     <p>Otrzymana wartość: <strong ></strong></p>
// </form>

export default Form;
