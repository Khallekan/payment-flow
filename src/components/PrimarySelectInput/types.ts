interface PrimarySelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  error?: boolean | string;
  label?: string;
  errorText?: string;
  setValue: (value: any, shouldValidate?: boolean | undefined) => void;
  setTouched: (value: boolean, shouldValidate?: boolean | undefined) => void;
  setError: (value: string | undefined) => void;
  touched: boolean;
  initialValue?: any;
  initialTouched: boolean;
  initialError?: string;
  description?: string;
  options: { label: string; value: string }[];
}
export type PrimarySelectInputType = React.FC<PrimarySelectInputProps>;
