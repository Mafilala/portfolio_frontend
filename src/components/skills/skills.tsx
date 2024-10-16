import React, { useEffect } from "react";
import SkillBox from "./skillBox";
import SkillCardsContainer from "./skillCardsContainer";
import useIntersectionObserver from "@/hooks/intersectionObserverHook";
const Skills = ({ setObserved }: { setObserved: (par: string) => void }) => {
  const ref = React.useRef(null);
  const onScreen = useIntersectionObserver(ref, {
    threshold: 0.5,
  });
  useEffect(() => {
    if (onScreen) {
      setObserved("skills");
    }
  }, [ref, onScreen]);
  return (
    <div
      ref={ref}
      id="skills"
      className="md:w-5/6 m-auto flex flex-col gap-8 my-36"
    >
      <div className="px-10 flex flex-col gap-2">
        <h3 className="text-[10px]">My Skills</h3>
        <h2 className="text-2xl">My Expertise</h2>
      </div>
      <SkillCardsContainer />
    </div>
  );
};

export default Skills;
