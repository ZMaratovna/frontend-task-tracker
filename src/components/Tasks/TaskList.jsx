import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const TaskList = (props) => {
  const [filterMode, setFilterMode] = useState(false);
  const userTasks = props.tasks.filter(
    (task) => task.executor === props.userId
  );
  if (!props.tasks.length) {
    return (
      <Container>
        <Typography variant='h3'>no tasks yet...Add first task!</Typography>
        <AddTask
          userId={props.userId}
          projectId={props.projectId}
          addTask={props.addTask}
        />
      </Container>
    );
  } else {
    return (
      <Container>
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
          <List>
            {userTasks.map((task) => {
              return <TaskItem {...props} data={task} />;
            })}
          </List>
        ) : (
          <List>
            {props.tasks.map((task) => {
              return <TaskItem {...props} data={task} />;
            })}
          </List>
        )}
        <AddTask
          userId={props.userId}
          projectId={props.projectId}
          addTask={props.addTask}
        />
      </Container>
    );
  }
};

export default TaskList;
