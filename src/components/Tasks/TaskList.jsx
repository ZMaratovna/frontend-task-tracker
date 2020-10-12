import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import styles from "../../styles/components/task/taskStyle";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { API } from "../../API/api";

const TaskList = (props) => {
  const [filterMode, setFilterMode] = useState(false);
  // const [tasks, setTasks] = useState([]);
  const userTasks = props.tasks.filter(
    (task) => task.executor === props.userId
  );
  // const [isLoading, setIsLoading] = useState(false);
  //const userTasks = [];

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  // useEffect(() => {
  //   const fetchData = async (id) => {
  //     const tasks = await API.getProjectTasks(id);
  //     console.log("tasks from fetch", tasks);
  //     setTasks(tasks);
  //   };
  //   fetchData(props.projectId);
  // }, []);

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
        <Container>
          {props.position === "developer" && (
            <div className={classes.filterContainer}>
              {filterMode ? (
                <Button
                  className={classes.filterBtn}
                  onClick={() => setFilterMode(false)}
                >
                  Show all tasks
                </Button>
              ) : (
                <Button
                  color='secondary'
                  className={classes.filterBtn}
                  onClick={() => setFilterMode(true)}
                >
                  Show my tasks
                </Button>
              )}
            </div>
          )}
          <TableContainer>
            <Table>
              <TableHead className={classes.head}>
                <TableRow>
                  <TableCell className={classes.headTitle}>Title</TableCell>
                  <TableCell className={classes.headTitle}>Content</TableCell>
                  <TableCell className={classes.headTitle}>Status</TableCell>
                  <TableCell className={classes.headTitle}>Executor</TableCell>
                  <TableCell className={classes.headTitle}>Edited</TableCell>
                </TableRow>
              </TableHead>

              {filterMode ? (
                <TableBody>
                  {userTasks.map((task, index) => {
                    return <TaskItem {...props} data={task} key={index} />;
                  })}
                </TableBody>
              ) : (
                <TableBody>
                  {props.tasks.map((task, index) => {
                    return <TaskItem {...props} data={task} key={index} />;
                  })}
                </TableBody>
              )}
            </Table>
          </TableContainer>

          {props.position === "manager" && (
            <AddTask
              userId={props.userId}
              projectId={props.projectId}
              addTask={props.addTask}
            />
          )}
        </Container>
      </Container>
    );
  }
};

export default TaskList;
