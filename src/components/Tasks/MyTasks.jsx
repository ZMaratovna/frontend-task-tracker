import React, { useState } from "react";
import TaskItem from "./TaskItem";

const MyTasks = (props) => {
  return (
    <div>
      <ol>
        {props.tasks.map((task) => {
          return <TaskItem {...props} data={task} />;
        })}
      </ol>
    </div>
  );
};

export default MyTasks;
