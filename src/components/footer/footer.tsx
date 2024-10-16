import React from "react";
import Image from "next/image";
import Button from "../buttons/button";
import Navlist from "../navbar/navlist";
import { useGetSocialQuery } from "../../services/api";
import SvgIcon from "../common/svgIcon";

const Footer = () => {
  const {
    data: socials = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSocialQuery();
  if (isSuccess) {
    console.log(socials[0].icon);
  }
  return (
    <div className="w-full flex flex-col gap-3 px-4 bg-[#FDF8F8]">
      <nav className=" flex justify-between items-center  w-full ">
        <Image src="/logo.png" width={70} height={70} alt="logo" />
        <Navlist observed={true} />
        <div className="flex justify-between">
          {isError ? (
            <p>error</p>
          ) : isLoading ? (
            <p>...</p>
          ) : (
            socials.map((social) => (
              <div key={social.id} className="flex items-center">
                <SvgIcon icon={social.icon} width="24" height="24" />
              </div>
            ))
          )}
        </div>
      </nav>
      <div className="h-[1px] w-full bg-gray-200"></div>
      <p className="text-xs">Made by Maruf</p>
    </div>
  );
};

export default Footer;
