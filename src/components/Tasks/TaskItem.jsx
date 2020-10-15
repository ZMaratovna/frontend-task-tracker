import React, { useState, useRef, Suspense } from "react";

import AssignTo from "./AssignTo";
import Modal from "../modal/modal";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import AssignIcon from "@material-ui/icons/PersonAdd";
import DevIcon from "@material-ui/icons/AccountCircle";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

import styles from "../../styles/components/task/taskStyle.js";

const TaskItem = (props) => {
  let executor = props.data.executor;
  if (executor && props.developers) {
    executor = props.developers.find((dev) => dev._id === executor).username;
  } else {
    executor = "n/a";
  }

  const [editTask, setEditTask] = useState(false);
  const [taskContent, setTaskContent] = useState(props.data.content);
  const [assign, setAssign] = useState(null);
  const [editStatus, setEditStatus] = useState(false);
  const [developer, setDeveloper] = useState(executor);
  const [openModal, setOpenModal] = useState(false);
  const anchorRef = useRef();

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
      <TableRow ref={anchorRef}>
        <TableCell align='center' className={classes.taskTitleCell}>
          <Typography className={classes.taskTitle}>
            {props.data.name}
          </Typography>
          {openModal && (
            <Modal
              id={props.data._id}
              delete={props.deleteTask}
              anchorEl={anchorRef.current}
              isOpen={setOpenModal}
            />
          )}
        </TableCell>

        <TableCell align='justify'>
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
            <Typography className={classes.taskContent}>
              {props.data.content}
            </Typography>
          )}
          <ButtonGroup>
            <ListItemIcon button>
              <Edit
                className={classes.icon}
                onClick={() => setEditTask(true)}
              />
              <DeleteIcon
                onClick={(e) => {
                  setOpenModal(true);
                }}
                className={classes.icon}
              />
            </ListItemIcon>
          </ButtonGroup>
        </TableCell>

        <TableCell align='center'>
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
              <Edit
                onClick={() => setEditStatus(true)}
                style={{ color: "#3f51b5" }}
              />
            </div>
          )}
        </TableCell>
        <TableCell align='center'>
          <Box>
            {assign ? (
              <AssignTo
                developers={props.developers}
                setDeveloper={setDeveloper}
                assignTask={props.assignTask}
                taskId={props.data._id}
                setAssign={setAssign}
              />
            ) : (
              <Box className={classes.devGroup}>
                <AssignIcon
                  size='small'
                  onClick={() => setAssign(true)}
                  style={{ color: "#3f51b5" }}
                />
                <Typography className={classes.developer}>
                  {developer}
                </Typography>
              </Box>
            )}
          </Box>
        </TableCell>
        <TableCell>{props.data.updatedAt.slice(0, 10)}</TableCell>
      </TableRow>
    );
  } else {
    return (
      <TableRow>
        <TableCell className={classes.taskTitleCell} align='center'>
          <Typography className={classes.taskTitle}>
            {props.data.name}
          </Typography>
        </TableCell>
        <TableCell align='justify'>
          <Typography className={classes.taskContent}>
            {props.data.content}
          </Typography>
        </TableCell>
        <TableCell align='center'>
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
                <Edit
                  className={classes.icon}
                  onClick={() => setEditStatus(true)}
                />
              )}
            </div>
          )}
        </TableCell>
        <TableCell align='center'>
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <Typography className={classes.developer}>{developer}</Typography>
          </Suspense>
          <DevIcon className={classes.icon} style={{ color: "#3f51b5" }} />
        </TableCell>
        <TableCell>{props.data.updatedAt.slice(0, 10)}</TableCell>
      </TableRow>
    );
  }
};
export default TaskItem;
