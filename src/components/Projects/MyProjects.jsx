import React from "react";

const MyProjects = (props) => {
  console.log(props);
  return (
    <ol>
      {props.projects.map((project) => {
        return (
          <li>
            <h2>{project.name}</h2>
            <p>{project.content}</p>
            <span>Developers: {project.developers}</span>
            <span>Created:{project.createdAt}</span>
          </li>
        );
      })}
    </ol>
  );
};

export default MyProjects;
