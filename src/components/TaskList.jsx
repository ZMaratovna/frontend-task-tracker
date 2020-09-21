import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  return (
    <ol>
      {props.tasks.map((task) => (
        <TaskItem data={task} />
      ))}
    </ol>
  );
}
