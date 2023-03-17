import { useFormik } from "formik";
import { initialValues, validationSchema } from "./validation";
import PrimaryInput from "../PrimaryInput";
import { BillingInfoFormType } from "./types";
import PrimarySelectInput from "../PrimarySelectInput";
import { creditCardTypes } from "@/data";
import { cc_format, formatExpiryDate } from "@/utils/formValueFormatting";
import Button from "../Button";
import { motion } from "framer-motion";
import { variants } from "@/utils";

const BillingInfoForm: BillingInfoFormType = ({
  changeStage,
  onCancel,
  isNext,
}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      window.scrollTo(0, 0);
      changeStage();
    },
  });

  const getFormikProps = (name: keyof typeof formik.values) => {
    return {
      ...formik.getFieldProps(name),
      ...formik.getFieldHelpers(name),
      ...formik.getFieldMeta(name),
    };
  };

  const handleCancel = () => {
    formik.resetForm();
    onCancel();
  };

  return (
    <motion.form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-10"
      variants={variants}
      initial={isNext ? "initial_left" : "initial_right"}
      animate="animate"
      exit={isNext ? "exit_right" : "exit_left"}
    >
      <PrimaryInput
        id="cardName"
        type="text"
        label="Name on Card"
        required={true}
        {...getFormikProps("cardName")}
        placeholder="Opara Linus Ahmed"
      />
      <PrimarySelectInput
        id="cardType"
        label="Card Type"
        required={true}
        {...getFormikProps("cardType")}
        options={creditCardTypes}
      />
      <div className="grid grid-cols-2 md:grid-cols-7 gap-y-10 gap-x-4">
        <PrimaryInput
          id="cardNumber"
          type="tel"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          label="Card details"
          required={true}
          {...getFormikProps("cardNumber")}
          value={cc_format(formik.values.cardNumber)}
          placeholder="44960 44960 44960 44960"
          minLength={13}
          maxLength={19}
          className="col-span-2 md:col-span-4"
        />
        <PrimaryInput
          id="expiryDate"
          type="tel"
          inputMode="numeric"
          label="Expiry Date"
          required={true}
          {...getFormikProps("expiryDate")}
          placeholder="MM / YY"
          maxLength={7}
          className="col-span-1 md:col-span-2"
          value={formatExpiryDate(formik.values.expiryDate)}
          inputClassName="text-center"
        />
        <PrimaryInput
          id="cvv"
          type="tel"
          inputMode="numeric"
          label="CVV"
          required={true}
          {...getFormikProps("cvv")}
          value={cc_format(formik.values.cvv)}
          placeholder="923"
          minLength={3}
          maxLength={3}
          className="col-span-1 md:col-span-1"
        />
      </div>
      <div className="w-full md:w-4/5 grid grid-cols-2 gap-3">
        <Button variant="primary" text="Next" type="submit" />
        <Button
          variant="secondary"
          text="Cancel Payment"
          type="reset"
          onClick={handleCancel}
        />
      </div>
    </motion.form>
  );
};

export default BillingInfoForm;
