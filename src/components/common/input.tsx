import React from "react";

interface InputProps {
  label: string;
  value: string;
  type: string;
  setValue: (feild: string, value: string) => void;
  field: string;
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  type,
  field,
}) => {
  return (
    <div className="w-full flex flex-col gap-2 ">
      <h4>{label}</h4>
      <input
        type={type}
        className="w-full border border-primaryLight focus:border-primary rounded-md h-10 p-1 px-2 focus:outline-none"
        value={value}
        onChange={(e) => setValue(field, e.target.value)}
      />
    </div>
  );
};

export default Input;
