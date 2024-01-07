
import React from "react";
import { projectsData } from "./projectsData";
import Project from "./project";
import SectionIntro from "../services/SectionIntro";
import { Globe2 } from 'lucide-react';

export default function Projects() {

  return (
    <section id="projects" className="my-16 mx-auto flex flex-col">
      <div className="flex justify-center items-center my-16">
        <p className="text-5xl font-bold mb-2 me-3">Our work defines us</p> <div className=""> <Globe2  size={60}/></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
