import React from "react";
import Image from "next/image";
import { SkillCardType } from "@/types";
import SvgIcon from "../common/svgIcon";

const SkillBox = (prop: SkillCardType) => {
  const { name, description, icon } = prop;
  return (
    <div className="w-1/2  sm:w-1/3 md:w-1/4 flex flex-col flex-shrink-0 justify-between bg-[#FDF8F8] p-5 rounded-md">
      <div className="w-[50px] h-[50px] rounded-md overflow-clip bg-white p-2 flex items-center justify-center">
        <SvgIcon icon={icon} width="24" height="24" />
      </div>
      <h3 className="text-xl font-extrabold">{name}</h3>
      <p className="text-xs">{description}</p>
    </div>
  );
};

export default SkillBox;
