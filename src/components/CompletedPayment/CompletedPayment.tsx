import { CompletedPaymentProps } from "./types";
import { motion } from "framer-motion";
import { variants } from "@/utils";

const CompletedPayment: React.FC<CompletedPaymentProps> = ({ reset }) => {
  return (
    <motion.div
      variants={variants}
      initial={"initial_right"}
      animate={"animate"}
      exit={"exit_left"}
      className="h-full flex items-center"
    >
      <div className="max-w-3xl w-11/12 mx-auto bg-white py-14 shadow-lg rounded-lg">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-7 md:w-6/12 lg:w-7/12 mx-auto">
          <div className="w-full flex flex-col gap-3 items-center">
            <div className="bg-white p-4 lg:p-6 rounded-full w-max aspect-square flex items-center justify-center shadow-lg">
              <img
                src="/tick.svg"
                alt="tick"
                className="w-6 md:w-8 lg:w-12 aspect-square"
              />
            </div>
            <p className="text-primary-purple text-xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Purchase Completed
            </p>
          </div>
          <p className="w-10/12 text-center md:text-left md:px-4 lg:px-2 md:w-full text-sm sm:text-base md:text-lg xl:text-xl text-primary-dark mx-auto md:mx-0">
            Please check your email for details concerning this transaction
          </p>
          <button
            onClick={reset}
            className="w-max text-center md:text-left md:px-4 lg:px-2 md:w-max text-sm sm:text-base md:text-lg xl:text-xl text-primary-orange mx-auto md:mx-0 relative before:absolute before:inset-x-0 before:-bottom-px before:mx-auto before:w-0 before:bg-primary-orange before:transition-all before:duration-500 before:ease-out hover:before:h-[2px] hover:before:w-full"
          >
            Return Home
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CompletedPayment;
