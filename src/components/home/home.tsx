import React, { Dispatch, SetStateAction, useEffect } from "react";
import Button from "../buttons/button";
import Image from "next/image";
import useIntersectionObserver from "@/hooks/intersectionObserverHook";
const Intro = () => {
  return (
    <div id="home" className="max-w-[75%] flex flex-col gap-3 sm:max-w-[40%] ">
      <h6 className="text-[10px]">Hey, I am Maruf</h6>
      <h2 className="text-2xl">
        I engineer <span className="text-primary text">smooth</span> and{" "}
        <span className="text-primary text">scalable</span> digital interfaces
        for a <span className="text-primary">seamless</span> user experience.
      </h2>
      <p className="text-xs w-3/4">
        I create responsive, intuitive web applications that blend performance
        with visual appeal, ensuring every user interaction is smooth and
        engaging
      </p>
      <Button
        label="Get In Touch"
        type="contained"
        className="w-20 rounded-sm"
      />
    </div>
  );
};

const Home = ({ setObserved }: { setObserved: (par: string) => void }) => {
  const ref = React.useRef(null);
  const onScreen = useIntersectionObserver(ref, {
    threshold: 0.7,
  });
  useEffect(() => {
    console.log("ref", ref.current);
    if (onScreen) {
      setObserved("home");
    }
    console.log(onScreen);
  }, [ref, onScreen]);
  return (
    <div
      ref={ref}
      className="flex flex-col justify-center gap-4 bg-[#FDF8F8] h-screen w-full px-8 sm:flex-row sm:items-center"
    >
      <Intro />
      <div className="self-end sm:self-center w-[220px] h-[220px] sm:w-[440px] sm:h-[440px] ">
        <Image
          className=""
          src="/profile.png"
          alt="profile photo"
          width={220}
          height={220}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Home;
