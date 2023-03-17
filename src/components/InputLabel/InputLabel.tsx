type InputLabelType = React.FC<{
  id: string;
  label: string;
}>;
const InputLabel: InputLabelType = ({ id, label }) => {
  return (
    <label
      id={id}
      className="text-sm sm:text-base md:text-lg lg:text-xl text-black font-bold"
    >
      {label}
    </label>
  );
};

export default InputLabel;
