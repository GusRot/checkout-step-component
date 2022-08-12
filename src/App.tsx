import React, { useState } from "react";
import { indexOf } from "lodash";
import logo from "./logo.svg";
import "./App.css";
import CheckoutStep from "./CheckoutStep";
import "./styles/global.css";
import { Status } from "./Types";

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
        const index = indexOf(options, step);

        setStep(options[index + i]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <CheckoutStep status={step} stepOptions={stepOptions} />
                <button onClick={() => handleStep(-1)}>Voltar Etapa</button>
                <button onClick={() => handleStep(1)}>Avançar Etapa</button>
            </header>
        </div>
    );
}

export default App;
