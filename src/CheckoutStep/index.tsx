import { indexOf } from "lodash";
import { CheckoutStepProps, StatusProgress } from "../Types";
import "./style.css";

const statusProgress: StatusProgress = {
    shipping: "Entrega",
    billing: "Pagamento",
    analysis: "Pagamento",
    finished: "Finalizado",
    canceled: null,
};

const CheckoutStep = ({ status, stepOptions }: CheckoutStepProps) => {
    return (
        <>
            {statusProgress[status] ? (
                <div className="checkout-steps">
                    {stepOptions.map((newStep, index) => {
                        const activeCurrent =
                            statusProgress[status] === newStep;
                        const lastStepActive =
                            index <
                            indexOf(stepOptions, statusProgress[status]);
                        const active = activeCurrent || lastStepActive;
                        const classNameStep = active ? "active step" : "step";

                        return (
                            <>
                                <div
                                    key={`step${newStep}`}
                                    className={`${
                                        activeCurrent
                                            ? "animation-step " + classNameStep
                                            : classNameStep
                                    }`}
                                />
                                <div
                                    key={`current-step${newStep}`}
                                    className={
                                        active
                                            ? "current-step active"
                                            : "current-step"
                                    }
                                >
                                    <div
                                        className={`current-step-container ${
                                            activeCurrent ? "animation-bar" : ""
                                        }`}
                                    >
                                        {lastStepActive ? (
                                            <span className="last-step">✓</span>
                                        ) : (
                                            <span>{index + 1}</span>
                                        )}
                                    </div>
                                    <p>{newStep}</p>
                                </div>
                            </>
                        );
                    })}
                </div>
            ) : (
                <p>Pedido Cancelado</p>
            )}
        </>
    );
};

export default CheckoutStep;
