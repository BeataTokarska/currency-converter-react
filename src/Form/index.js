import React from "react";
import "./style.css";

const Form = (props) => (
    <form className="converter">
        <fieldset className="converter__fieldset">
            <legend className="converter__title">Prosty przelicznik walut</legend>
            <p>
                <label>
                    Wybierz walutę:
                    <select name="currency">
                        <option value="USD">USD</option>
                        <option value="GBP" selected>GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </label>
            </p>

            <p>
                <label>
                    wpisz kwotę w zł: <input  type="number" value="0.00" name="amountPLN" min="0.00"
                        step="0.01"/>
                </label>
            </p>
        </fieldset>
        <p className="converter__buttonContainer">
            <button>Przelicz</button>
            <button type="reset">Wyczyść</button>
        </p>
        <p>Otrzymana wartość: <strong ></strong></p>
    </form>
);

export default Form;