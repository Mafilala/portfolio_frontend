import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/types";

const ProjectCard = ({
  name,
  description,
  image_url,
  live_url,
}: ProjectType) => {
  return (
    <div className="flex flex-col w-1/2  md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-md overflow-clip shadow-xl gap-3">
      <div className="w-full">
        <Image
          src={image_url}
          width={1}
          height={1}
          alt="project photo"
          layout="responsive"
        />
      </div>
      <div className="px-3 py-2 flex gap-1 flex-col">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm">{description}</p>
        <Link href={live_url} target="_blank" rel="noopener noreferrer">
          <button>View Live</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
