import { ConfirmPaymentType } from "./types";
import { motion } from "framer-motion";
import { variants } from "@/utils";
import Button from "../Button";

const ConfirmPayment: ConfirmPaymentType = ({
  changeStage,
  isNext,
  onCancel,
}) => {
  return (
    <motion.div
      variants={variants}
      initial={isNext ? "initial_left" : "initial_right"}
      animate="animate"
      exit={isNext ? "exit_right" : "exit_left"}
      className="flex flex-col gap-10"
    >
      <div className="rounded-[10px] overflow-hidden shadow-lg bg-white">
        <div className="grid grid-cols-2 px-10 md:px-20 py-5 bg-primary-blue text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold">
          <p className="">Item Name</p>
          <p className="text-right"> ₦ Price</p>
        </div>
        <div className="mt-6 py-12 bg-white px-10 md:px-20 text-primary-purple text-sm sm:text-base md:text-lg lg:text-xl font-bold flex flex-col gap-10">
          <div className="grid grid-cols-2">
            <p>Data science and usability</p>
            <p className="text-right">50,000.00</p>
          </div>
          <div className="grid grid-cols-2">
            <p>Shipping</p>
            <p className="text-right text-black">0.00</p>
          </div>
        </div>
        <div className="w-11/12 h-px bg-secondary-purple mx-auto"></div>
        <div className="px-6 md:px-14 py-12 text-primary-purple text-sm sm:text-base md:text-lg lg:text-xl font-bold">
          <div className="p-4 border border-secondary-purple grid grid-cols-2">
            <p className="text-secondary-purple">Total</p>
            <p className="text-right">50,000.00</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-4/5 grid grid-cols-2 gap-3">
        <Button
          variant="primary"
          text="Next"
          type="submit"
          onClick={changeStage}
        />
        <Button
          variant="secondary"
          text="Cancel Payment"
          type="reset"
          onClick={onCancel}
        />
      </div>
    </motion.div>
  );
};

export default ConfirmPayment;
