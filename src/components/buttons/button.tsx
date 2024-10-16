import React from "react";
import clsx from "clsx";
import { ButtonType } from "../../types";

const Button: React.FC<ButtonType> = ({
  type,
  label,
  onClick,
  isSubmit,
  className,
}) => {
  const baseClasses =
    "text-[10px] flex justify-center items-center  p-2  border border-primary cursor-pointer";
  const combinedClasses = clsx(
    baseClasses,
    {
      "bg-white text-primary": type === "contained",
      "bg-primary text-white": type === "outlined",
    },
    className
  );

  return (
    <button
      className={combinedClasses}
      onClick={onClick}
      type={isSubmit ? "submit" : "button"}
    >
      <span>{label}</span>
    </button>
  );
};

export default Button;
