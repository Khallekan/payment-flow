import { variants } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import FormProgress from "@/components/FormProgress";

import { PaymentFormComponentType } from "./types";
import PersonalInfoForm from "../PersonalInfoForm";
import { useCallback, useState } from "react";
import { Stages } from "@/types";
import BillingInfoForm from "../BillingInfoForm";
import ConfirmPayment from "../ConfirmPayment";
const PaymentFormComponent: PaymentFormComponentType = ({ onComplete }) => {
  const [stage, setStage] = useState<Stages>("personal");
  const [isNext, setIsNext] = useState<boolean>(true);
  const [successStages, setSuccessStages] = useState<Stages[]>(["personal"]);

  const handleSetStage = (stage: Stages, done?: boolean) => {
    setSuccessStages((oldStages) => {
      if (done) {
        return ["personal"];
      }
      if (oldStages.includes(stage)) {
        return oldStages;
      }
      oldStages.push(stage);
      return oldStages;
    });
    setStage(stage);
  };

  const handleProgressStage = (toStage: Stages) => {
    if (toStage === stage) {
      return;
    }

    const currIndex = successStages.indexOf(stage);
    const clickedIndex = successStages.indexOf(toStage);

    setIsNext(clickedIndex > currIndex);

    setStage(toStage);
  };

  const handleCancel = useCallback(() => {
    setStage("personal");
    setSuccessStages(["personal"]);
    window.scrollTo(0, 0);
  }, [stage]);

  return (
    <motion.section
      variants={variants}
      initial={"initial_left"}
      animate={"animate"}
      exit={"exit_right"}
      className="max-w-3xl w-11/12 mx-auto flex flex-col gap-4 md:gap-6 xl:gap-8"
    >
      <h3 className="text-primary-purple text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold">
        Complete your Purchase
      </h3>
      <FormProgress
        active={stage}
        onClick={handleProgressStage}
        available={successStages}
      />
      <div className="mt-8 overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          {stage === "personal" && (
            <PersonalInfoForm
              key={"personal"}
              changeStage={() => handleSetStage("billing")}
              onCancel={handleCancel}
              isNext={isNext}
            />
          )}
          {stage === "billing" && (
            <BillingInfoForm
              key={"billing"}
              changeStage={() => handleSetStage("confirm")}
              onCancel={handleCancel}
              isNext={isNext}
            />
          )}
          {stage === "confirm" && (
            <ConfirmPayment
              key={"confirm"}
              changeStage={() => onComplete()}
              onCancel={handleCancel}
              isNext={isNext}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default PaymentFormComponent;
