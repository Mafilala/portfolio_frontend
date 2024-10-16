import React from "react";

interface InputProps {
  label: string;
  value: string;
  setValue: (feild: string, value: string) => void;
  field: string;
  rows: number;
}

const TextArea: React.FC<InputProps> = ({
  label,
  value,
  setValue,
  field,
  rows = 10,
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <h4>{label}</h4>
      <textarea
        className="w-full  rounded-md p-2 border border-primaryLight focus:border-primary focus:outline-none"
        value={value}
        onChange={(e) => setValue(field, e.target.value)}
        rows={rows}
        placeholder="Type your message here..."
      />
    </div>
  );
};

export default TextArea;
