import React, { useEffect, useRef } from "react";
import ProjectCard from "./projectCard";
import useIntersectionObserver from "@/hooks/intersectionObserverHook";
import { useGetProjectsQuery } from "@/services/api";
import { ProjectType } from "@/types";
const Projects = ({ setObserved }: { setObserved: (par: string) => void }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

const scrollLeft = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust the scroll amount as needed
  }
};

const scrollRight = () => {
  if (containerRef.current) {
    containerRef.current.scrollBy({ left: 300, behavior: "smooth" }); // Adjust the scroll amount as needed
  }
};


  const ref = React.useRef(null);
  const onScreen = useIntersectionObserver(ref, {
    threshold: 0.6,
  });

  const {
    data: projects = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectsQuery();
  if (isError) {
    console.log(error);
  }

  useEffect(() => {
    if (onScreen) {
      setObserved("projects");
    }
    console.log(onScreen);
  }, [onScreen]);

  return (
    <div
      ref={ref}
      id="projects"
      className="md:w-5/6 m-auto flex flex-col gap-8 my-36"
    >
      <div className="flex justify-between w-full px-10">
        <h2>My Projects</h2>
        <button className="text-xs">Visit My Github</button>
      </div>
      <div className="relative w-full px-10">
        <div
          ref={containerRef}
          className="flex overflow-x-auto sm:overflow-x-hidden scroll-smooth w-full flex-nowrap gap-4"
        >
          {isLoading ? (
            <div className="flex justify-center items-center w-full h-full">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            projects.map((project: ProjectType) => (
              <ProjectCard key={project.id} {...project} />
            ))
          )}
        </div>
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
    </div>
  );
};

export default Projects;
