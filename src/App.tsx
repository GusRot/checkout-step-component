import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CheckoutStep from "./CheckoutStep";
import "./styles/global.css";
import { Status } from "./Types";
import Button from "./Button";

const stepOptions = ["Entrega", "Pagamento", "Finalizado"];

function App() {
    const [step, setStep] = useState<Status>("shipping");

    function handleStep(i: number) {
        const options: Status[] = [
            "shipping",
            "billing",
            "analysis",
            "finished",
            "canceled",
        ];
        const index = options.indexOf(step);

        setStep(options[index + i]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CheckoutStep status={step} stepOptions={stepOptions} />
                <Button handleStep={handleStep} step={step} />
            </header>
        </div>
    );
}

export default App;
