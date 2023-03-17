import CompletedPayment from "@/components/CompletedPayment";
import PaymentFormComponent from "@/components/PaymentFormComponent";
import { Stages } from "@/types";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const FormContainer: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const handleCompleted = () => {
    setIsCompleted(true);
  };

  const handleReset = () => {
    setIsCompleted(false);
  };

  return (
    <main className="main_wrapper w-full h-full py-[10vw] overflow-y-auto">
      <AnimatePresence mode="wait" initial={false}>
        {!isCompleted && (
          <PaymentFormComponent key="incomplete" onComplete={handleCompleted} />
        )}
        {isCompleted && <CompletedPayment key="complete" reset={handleReset} />}
      </AnimatePresence>
    </main>
  );
};

export default FormContainer;
