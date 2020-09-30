import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

export default function TaskList(props) {
  const [filterMode, setFilterMode] = useState(false);
  const userTasks = props.tasks.filter(
    (task) => task.executor === props.userId
  );
  if (!props.tasks.length) {
    return (
      <div>
        <h3>no tasks yet...Add first task!</h3>
        <AddTask projectId={props.projectId} addTask={props.addTask} />
      </div>
    );
  } else {
    return (
      <div>
        {props.position === "developer" && (
          <div>
            {filterMode ? (
              <button onClick={() => setFilterMode(false)}>
                Show all tasks
              </button>
            ) : (
              <button onClick={() => setFilterMode(true)}>Show my tasks</button>
            )}
          </div>
        )}
        {filterMode ? (
          <ol>
            {userTasks.map((task) => {
              console.log(props);
              return <TaskItem {...props} data={task} />;
            })}
          </ol>
        ) : (
          <ol>
            {props.tasks.map((task) => {
              console.log(props);
              return <TaskItem {...props} data={task} />;
            })}
          </ol>
        )}
        <AddTask projectId={props.projectId} addTask={props.addTask} />
      </div>
    );
  }
}
