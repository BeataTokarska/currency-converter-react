import React, { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { currencies } from "./currencies";
import Rates from "./Rates";

function App() {
    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currencies
            .find(({ short }) => short === currency)
            .rate;

        setResult({
            sourceAmount: +amount,
            targetAmount: amount / rate,
            currency,
        });
    }


    return (
        <body className="body">
            <div className="app">
                <Form
                    result={result}
                    calculateResult={calculateResult}
                />
            </div>
            <div>
                <Rates />
            </div>


            <p>*kurs walut na dzień 12.04.2022</p>
        </body>
    );
}

export default App;
