import * as Yup from "yup";

export const initialValues: {
  cardName: string;
  cardType: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
} = {
  cardName: "",
  cardType: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

export const validationSchema = Yup.object({
  cardName: Yup.string().required("Please enter card name"),
  cardType: Yup.string().required("Please choose a card type"),
  cardNumber: Yup.number()
    .required("Please enter your card number")
    .typeError("Please enter a valid card number"),
  expiryDate: Yup.string().required("Expiry Date is required"),
  cvv: Yup.number()
    .required("Invalid")
    .test("length", "Invalid", (val) => `${val}`.length === 3)
    .typeError("Invalid"),
});
