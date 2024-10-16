import React from "react";
import Image from "next/image";
import Button from "../buttons/button";
import HamburgerButton from "../hamburger/hamburger";
import Drawer from "../drawer/drawer";
import Navlist from "./navlist";

const Navbar = ({
  isOpen,
  setIsOpen,
  observed,
}: {
  isOpen: boolean;
  setIsOpen: (par: boolean) => void;
  observed: string;
}) => {
  const redirect = () => {
    window.location.href = "#contact";
  };

  return (
    <nav className="flex bg-white justify-between items-center border w-full px-4 fixed z-10">
      <div className="relative  h-[40px] w-[40px] sm:h-[70px] sm:w-[70px]">
        <Image src="/logo.png" fill alt="logo" />
      </div>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navlist observed={observed} />
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="w-20">
        <Button
          label="Contact Me"
          type="contained"
          className="rounded-sm"
          onClick={redirect}
        />
      </div>
    </nav>
  );
};

export default Navbar;
