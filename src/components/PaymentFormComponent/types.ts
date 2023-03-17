import { Stages } from "@/types";

interface PaymentFormComponentProps {
  onComplete: () => void;
}

export type PaymentFormComponentType = React.FC<PaymentFormComponentProps>;
