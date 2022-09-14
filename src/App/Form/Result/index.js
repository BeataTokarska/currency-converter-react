import React from "react";
import "./style.css";

export const Result = ({ result }) => (
    <p className="result">
        {result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=
                {" "}
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </p>
);