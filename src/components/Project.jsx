import React from "react";
import TaskList from "./TaskList";

export default function Project(props) {
  console.log("project.props", props);
  return (
    <div>
      <h1>{props.project.name}</h1>
      <p>{props.project.content}</p>
      <h2>Tasks</h2>
      <TaskList tasks={props.tasks} />
    </div>
  );
}
