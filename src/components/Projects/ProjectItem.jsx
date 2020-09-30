import React from "react";
import { useHistory } from "react-router-dom";

export default function ProjectItem(props) {
  console.log("projectItem", props);
  const history = useHistory();
  return props.projects.map((project) => (
    <li key={project._id}>
      <h2>{project.name}</h2>
      <p>{project.content}</p>
      <span>Go to tasks</span>
      <button
        onClick={() => {
          props.getProject(project._id);
          history.push(`/projects/${project._id}`);
        }}
      >
        ->
      </button>
    </li>
  ));
}
