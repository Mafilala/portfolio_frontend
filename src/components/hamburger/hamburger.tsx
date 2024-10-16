"use client";
import React, { useState } from "react";
import { HamburgerButtonProps } from "@/types";
import clsx from "clsx";

const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  setIsOpen,
  isOpen,
}) => {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="md:hidden flex flex-col items-center justify-center w-10 h-10 bg-primaryLight rounded focus:outline-none"
      onClick={toggleMenu}
    >
      <div
        className={clsx("w-8 h-1 bg-white my-1 transition-transform", {
          "rotate-45 translate-y-2": isOpen,
        })}
      ></div>
      <div
        className={clsx("w-8 h-1 bg-white my-1 transition-opacity", {
          "opacity-0": isOpen,
        })}
      ></div>
      <div
        className={clsx("w-8 h-1 bg-white my-1 transition-transform", {
          "-rotate-45 -translate-y-2": isOpen,
        })}
      ></div>
    </button>
  );
};

export default HamburgerButton;
