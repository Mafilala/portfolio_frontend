import { useRef } from "react";
import SkillBox from "./skillBox";
import { useGetSkillsQuery } from "../../services/api";
import { SkillCardType } from "@/types";

const SkillCardsContainer = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const {
    data: skills = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSkillsQuery();
  if (isError) {
    console.log(error);
  }

  return (
    <div className="relative w-full px-10">
      <div
        ref={containerRef}
        className="flex overflow-x-auto sm:overflow-x-hidden scroll-smooth w-full flex-nowrap gap-4"
      >
        {isError ? (
          <div>Error loading skill..</div>
        ) : isLoading ? (
          <div>Loading...</div>
        ) : (
          skills.map((skill) => <SkillBox {...skill} />)
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"
        onClick={scrollLeft}
      >
        ←
      </button>
      <button
        className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2"
        onClick={scrollRight}
      >
        →
      </button>
    </div>
  );
};

export default SkillCardsContainer;
