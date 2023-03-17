import { useFormik } from "formik";
import Button from "../Button";
import PrimaryInput from "../PrimaryInput";
import PrimarySelectInput from "../PrimarySelectInput";
import { initialValues, validationSchema } from "./validation";
import * as nigerianStates from "nigerian-states-and-lgas";
import { useMemo } from "react";
import { PersonalInfoFormType } from "./types";
import { motion } from "framer-motion";
import { variants } from "@/utils";

const PersonalInfoForm: PersonalInfoFormType = ({
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

  const states = useMemo(() => {
    return nigerianStates
      .states()
      .map((state) => ({ label: state, value: state }));
  }, []);

  const lgas = useMemo(() => {
    if (!formik.values.state || !formik.values.state.length) {
      return [] as unknown as { label: string; value: string }[];
    }
    const localGovts = nigerianStates.lgas(formik.values.state);
    if (!localGovts) {
      return [] as unknown as { label: string; value: string }[];
    }
    return localGovts.map((lg) => ({ label: lg, value: lg }));
  }, [formik.values.state]);

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
        id="name"
        type="text"
        label="Name"
        {...getFormikProps("name")}
        placeholder="Opara Linus Ahmed"
      />
      <PrimaryInput
        id="email"
        type="email"
        label="Email Address"
        {...getFormikProps("email")}
        placeholder="oparalinusahmed@devmail.com"
        required={true}
        description="The purchase reciept would be sent to this address"
      />
      <PrimaryInput
        id="address_1"
        type="text"
        label="Address 1"
        {...getFormikProps("address_1")}
        placeholder="The address of the user goes here"
      />
      <PrimaryInput
        id="address_2"
        type="text"
        label="Address 2"
        {...getFormikProps("address_2")}
        placeholder="and here"
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-10 md:gap-y-4 md:gap-4 w-full">
        <PrimarySelectInput
          id="localGovernment"
          label="Local Government"
          {...getFormikProps("localGovernment")}
          options={lgas}
          className="col-span-1 md:col-span-3"
        />
        <PrimarySelectInput
          id="state"
          label="State"
          {...getFormikProps("state")}
          options={states}
          className="col-span-2"
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

export default PersonalInfoForm;
