import { Stages } from "@/types";

export const stagesElement: {
  title: string;
  value: Stages;
}[] = [
  {
    title: "Personal Info",
    value: "personal",
  },
  {
    title: "Billing Info",
    value: "billing",
  },
  {
    title: "Confirm Payment",
    value: "confirm",
  },
];

export const creditCardTypes = [
  { label: "Visa", value: "visa" },
  { label: "Mastercard", value: "mastercard" },
];

export const toastOptions = {
  error: {
    iconTheme: {
      primary: "white",
      secondary: "#EB5757",
    },
    style: {
      background: "#EB5757",
      color: "white",
    },
  },
};
