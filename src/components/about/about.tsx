import useIntersectionObserver from "@/hooks/intersectionObserverHook";
import Image from "next/image";
import React, { useEffect } from "react";
import { AboutMeType } from "@/types";
import { useGetAboutMeQuery } from "@/services/api";

const AboutCard = (prop: AboutMeType) => {
  const { id, image_url, intro, experience } = prop;
  return (
    <>
      <div className="border border-red-600 m-auto rounded-lg overflow-hidden">
        <Image
          src={image_url}
          alt="about me photo"
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
      <div className="col-span-1 sm:col-span-2 m-auto flex flex-col gap-3">
        <h6 className="text-xs">About</h6>
        <h2 className="text-3xl">About Me</h2>
        <p className="text-sm">{intro}</p>
        <p className="text-sm">{experience}</p>
      </div>
    </>
  );
};

const About = ({ setObserved }: { setObserved: (par: string) => void }) => {
  const ref = React.useRef(null);
  const onScreen = useIntersectionObserver(ref, {
    threshold: 0.6,
  });
  const {
    data: about = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAboutMeQuery();

  useEffect(() => {
    if (onScreen) {
      setObserved("about");
    }
    console.log(onScreen);
  }, [ref, onScreen]);
  return (
    <div
      id="about"
      className="grid grid-cols-2 sm:grid-cols-3 max-w-[75%]  m-auto  gap-4 my-36"
      ref={ref}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <p>error</p>
      ) : (
        <AboutCard
          id={about.id}
          intro={about.intro}
          experience={about.experience}
          image_url={about.image_url}
        /> //+
      )}
    </div>
  );
};

export default About;
