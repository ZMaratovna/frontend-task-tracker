import React from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function TaskList(props) {
  return (
    <div>
      <ol>
        {props.tasks.map((task) => (
          <TaskItem {...props} data={task} />
        ))}
      </ol>
      <AddTask projectId={props.projectId} addTask={props.addTask} />
    </div>
  );
}
