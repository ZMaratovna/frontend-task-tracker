import React, { useState } from "react";

import AssignTo from "./AssignTo";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import AssignIcon from "@material-ui/icons/AssignmentInd";
import DevIcon from "@material-ui/icons/AccountCircle";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

import styles from "../../styles/components/task/taskStyle.js";

const TaskItem = (props) => {
  let executor = props.data.executor;
  if (executor && props.developers) {
    executor = props.developers.find((dev) => dev._id === executor).username;
    console.log("executor", executor);
  } else {
    executor = "not assign";
  }

  const [editTask, setEditTask] = useState(false);
  const [taskContent, setTaskContent] = useState(props.data.content);
  const [assign, setAssign] = useState(null);
  const [editStatus, setEditStatus] = useState(false);
  const [developer, setDeveloper] = useState(executor);

  const handleContent = async (e) => {
    setTaskContent(e.target.value);
    await props.editTask(props.data._id, e.target.value);
    setEditTask(false);
  };
  const handleStatus = async (e) => {
    await props.setStatus(props.data._id, e.target.value);
    setEditStatus(false);
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles();

  if (props.position === "manager") {
    return (
      <TableRow>
        <TableCell>
          <Typography>{props.data.name}</Typography>
        </TableCell>
        <TableCell>
          {editTask ? (
            <div>
              <TextField
                className={classes.textField}
                multiline
                variant='outlined'
                defaultValue={taskContent}
                onBlur={handleContent}
              ></TextField>
            </div>
          ) : (
            <Typography align='justify'>{props.data.content}</Typography>
          )}
          <ButtonGroup>
            <ListItemIcon button>
              <Edit onClick={() => setEditTask(true)} />
              <DeleteIcon onClick={() => props.deleteTask(props.data._id)} />
            </ListItemIcon>
          </ButtonGroup>
        </TableCell>
        <TableCell>
          {editStatus ? (
            <div>
              <select name='status' onBlur={handleStatus}>
                <option />
                <option value='waiting'>Waiting</option>
                <option value='implementation'>Implementation</option>
                <option value='verifying'>Verifying</option>
                <option value='releasing'>Releasing</option>
              </select>
            </div>
          ) : (
            <div className={classes.status}>
              <p>{props.data.status.toUpperCase()}</p>
              <Edit onClick={() => setEditStatus(true)} />
            </div>
          )}
        </TableCell>
        <TableCell>
          <Box className={classes.headGroup}>
            {assign ? (
              <AssignTo
                developers={props.developers}
                setDeveloper={setDeveloper}
                assignTask={props.assignTask}
                taskId={props.data._id}
                setAssign={setAssign}
              />
            ) : (
              <>
                <AssignIcon size='small' onClick={() => setAssign(true)} />
                <Typography>{developer}</Typography>
              </>
            )}
          </Box>
        </TableCell>
        <TableCell>{props.data.updatedAt.slice(0, 10)}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <TableRow>
        <TableCell>
          <Typography>{props.data.name}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{props.data.content}</Typography>
        </TableCell>

        <TableCell>
          {props.data.executor && props.data.executor === props.userId && (
            <Edit onClick={() => setEditStatus(true)} />
          )}
          {editStatus ? (
            <div>
              <select name='status' onBlur={handleStatus}>
                <option />
                <option value='waiting'>Waiting</option>
                <option value='implementation'>Implementation</option>
                <option value='verifying'>Verifying</option>
                <option value='releasing'>Releasing</option>
              </select>
            </div>
          ) : (
            <div className={classes.status}>
              <p>{props.data.status.toUpperCase()}</p>
              {props.data.executor && props.data.executor === props.userId && (
                <Edit onClick={() => setEditStatus(true)} />
              )}
            </div>
          )}
        </TableCell>
        <TableCell>
          <Typography>{developer}</Typography>
          <DevIcon style={{ color: "rgba(245, 0, 87, 1)" }} />
        </TableCell>
        <TableCell>{props.data.updatedAt.slice(0, 10)}</TableCell>
      </TableRow>
    );
  }
};
export default TaskItem;
