export type Status =
    | "shipping"
    | "billing"
    | "analysis"
    | "finished"
    | "canceled";

export interface CheckoutStepProps {
    status: Status;
    stepOptions: string[];
}

export interface StatusProgress {
    shipping: string;
    billing: string;
    analysis: string;
    finished: string;
    canceled: null;
}
