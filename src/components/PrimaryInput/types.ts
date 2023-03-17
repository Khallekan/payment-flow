export interface PrimaryInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  error?: boolean | string;
  label?: string;
  errorText?: string;
  type: "password" | "text" | "email" | "date" | "tel";
  setValue: (value: any, shouldValidate?: boolean | undefined) => void;
  setTouched: (value: boolean, shouldValidate?: boolean | undefined) => void;
  setError: (value: string | undefined) => void;
  touched: boolean;
  initialValue?: any;
  initialTouched: boolean;
  initialError?: string;
  description?: string;
  inputClassName?: string;
}
