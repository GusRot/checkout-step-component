import "./style.css";

interface ButtonProps {
    handleStep: (n: number) => void;
    step: string;
}

export default function Button({ handleStep, step }: ButtonProps) {
    return (
        <div className="button-container">
            <div className="button-column">
                <button onClick={() => handleStep(-1)}>Voltar Etapa</button>
                <span>{step ? step : "Clique para iniciar novamente"}</span>
            </div>
            <div className="button-column">
                <button onClick={() => handleStep(1)}>Avançar Etapa</button>
                <span>{step ? step : "Clique para iniciar novamente"}</span>
            </div>
        </div>
    );
}
