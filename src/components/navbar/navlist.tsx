import Link from "next/link";
import React from "react";

const Navlist = ({ observed }: { observed: boolean }) => {
  const li = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "About Me", id: "about" },
    { label: "Projects", id: "projects" },
  ];
  return (
    <div className="hidden md:flex justify-between items-center gap-4">
      {li.map((item) => (
        <div className={`${observed === item.id ? "text-yellow-300" : ""}`}>
          <Link href={`#${item.id}`} key={item.id}>
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navlist;
