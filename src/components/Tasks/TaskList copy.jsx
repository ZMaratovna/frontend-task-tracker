import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import styles from "../../styles/components/task/taskStyle";

const TaskList = (props) => {
  const [filterMode, setFilterMode] = useState(false);
  const userTasks = props.tasks.filter(
    (task) => task.executor === props.userId
  );

  const useStyles = makeStyles(styles);
  const classes = useStyles();
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
        {filterMode ? (
          <List>
            {userTasks.map((task) => {
              return <TaskItem {...props} data={task} />;
            })}
          </List>
        ) : (
          <List>
            <TableContainer component={Paper}>
              <Table aria-label='simple table'>
                <TableHead className={classes.head}>
                  <TableRow>
                    <TableCell className={classes.headTitle}>
                      {props.data.name}
                    </TableCell>
                    <TableCell className={classes.headTitle}>Status</TableCell>
                    <TableCell className={classes.headTitle}>
                      Executor
                    </TableCell>
                    <TableCell className={classes.headTitle}>Edited</TableCell>
                  </TableRow>
                </TableHead>
                {props.tasks.map((task) => {
                  return <TaskItem {...props} data={task} />;
                })}
              </Table>
            </TableContainer>
          </List>
        )}
        {props.position === "manager" && (
          <AddTask
            userId={props.userId}
            projectId={props.projectId}
            addTask={props.addTask}
          />
        )}
      </Container>
    );
  }
};

export default TaskList;
