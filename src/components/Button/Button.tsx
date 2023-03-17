type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  text: string;
};

type ButtonType = React.FC<ButtonProps>;

const Button: ButtonType = ({ variant, text, ...props }) => {
  return (
    <button
      className={`rounded-[10px] g-10 py-3 lg:py-0 lg:h-14 text-sm sm:text-base md:text-lg lg:text-xl ${
        variant === "primary" ? "btn-primary-gradient text-btn-grey" : ""
      } ${variant === "secondary" ? "text-primary-purple" : ""}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
