import * as Yup from "yup";

export const initialValues: {
  name: string;
  email: string;
  address_1: string;
  address_2: string;
  localGovernment: string;
  state: string;
} = {
  name: "",
  email: "",
  address_1: "",
  address_2: "",
  localGovernment: "",
  state: "",
};

export const validationSchema = Yup.object({
  name: Yup.string(),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  address_1: Yup.string(),
  address_2: Yup.string(),
  localGovernment: Yup.string(),
  state: Yup.string(),
});
