import { AnimatePresence, motion } from "framer-motion";
import InputLabel from "../InputLabel";
import { PrimarySelectInputType } from "./types";

const PrimarySelectInput: PrimarySelectInputType = ({
  setValue: _setValue,
  setTouched: _setTouched,
  setError: _setError,
  touched: _touched,
  initialValue: _initialValue,
  initialError: _initialError,
  initialTouched: _initialTouched,
  onSubmit: _onSubmit,
  error,
  errorText,
  id,
  label,
  required,
  description,
  options,
  className,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {(label || description || required) && (
        <span className="flex flex-col gap-2">
          {(label || required) && (
            <span className="inline-block">
              {label && <InputLabel id={id} label={label} />}{" "}
              {required && (
                <span className="text-primary-red text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                  *
                </span>
              )}
            </span>
          )}
          {description && (
            <span className="text-secondary-purple text-xs md:text-sm lg:text-base">
              {description}
            </span>
          )}
        </span>
      )}
      <select
        {...props}
        id={id}
        required={required}
        className="global-select w-full h-12 lg:h-16 border border-primary-purple rounded-[10px] px-5 placeholder:text-primary-dark placeholder:font-normal font-normal overflow-hidden text-sm sm:text-base md:text-lg lg:text-xl"
      >
        <option value="">
          Select a {label}
        </option>
        {options &&
          !!options.length &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
      </select>

      <AnimatePresence>
        {error && _touched && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="pt-1 pl-1 text-xs md:text-lg font-semibold text-primary-red"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrimarySelectInput;
