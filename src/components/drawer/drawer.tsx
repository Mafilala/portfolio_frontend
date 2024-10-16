import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (par: boolean) => void;
}

interface LinkPropType {
  label: string;
  id: string;
  setIsOpen: (par: boolean) => void;
}

const LinkCard: React.FC<LinkPropType> = ({ label, id, setIsOpen }) => {
  return (
    <div
      className="w-full h-fit py-1 bg-white flex justify-center items-center mb-2 text-primaryLight rounded-lg"
      onClick={() => setIsOpen(false)}
    >
      <Link href={`#${id}`}>{label}</Link>
    </div>
  );
};

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const li = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
  ];
  return (
    <>
      {isOpen && (
        <div
          className={clsx(
            "md:hidden absolute top-[100%] left-1/2 transform -translate-x-1/2 w-60 h-fit bg-[#f5e1e2] bg-opacity-50 transition-transform duration-300 rounded-b-xl flex flex-col justify-center items-center p-4",
            {
              "translate-y-0": isOpen,
              "-translate-y-full": !isOpen,
            }
          )}
        >
          {li.map((item, i) => (
            <LinkCard
              key={item.id}
              label={item.label}
              id={item.id}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Drawer;
