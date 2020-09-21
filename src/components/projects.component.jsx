import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = (props) => {
  return (
    <ol>
      {props.projects.map((project, index) => (
        <ProjectItem
          key={project._id}
          number={index}
          project={project}
          projectId={project._id}
          getProject={props.getProject}
        />
      ))}
    </ol>
  );
};

export default Projects;
