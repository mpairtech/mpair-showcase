
import React from "react";
import { projectsData } from "./projectsData";
import Project from "./project";
import SectionIntro from "../services/SectionIntro";

export default function Projects() {

  return (
    <section id="projects" className="my-16 mx-auto flex flex-col">
     <SectionIntro
        // eyebrow="Projects"
        title="Our work defines us"
        className="my-16"
      >
      </SectionIntro>
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
