import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import moment from "moment";

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

const TaskItem = (props) => {
  let history = useHistory();
  let executor = props.data.executor;
  if (executor) {
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

  const useStyles = makeStyles((theme) => ({
    status: {
      textAlign: "center",
      fontSize: "10px",
      backgroundColor: "rgba(245, 0, 87, 0.2)",
      width: "100px",
      color: "rgba(245, 0, 87, 1)",
      padding: "6px",
      borderRadius: "4px",
    },
    head: {
      backgroundColor: "#3f51b5",
    },
    headTitle: {
      color: "#fff",
      alignSelf: "center",
    },
    headGroup: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  if (props.position === "manager") {
    return (
      <ListItem>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell>
                  {props.data.name}
                  <ButtonGroup>
                    <ListItemIcon button>
                      <Edit
                        onClick={() => setEditTask(true)}
                        style={{ color: "#ffff" }}
                      />
                      <DeleteIcon
                        onClick={() => props.deleteTask(props.data._id)}
                        style={{ color: "#ffff" }}
                      />
                    </ListItemIcon>
                  </ButtonGroup>
                </TableCell>
                <TableCell>
                  <Box className={classes.headGroup}>
                    <Typography className={classes.headTitle}>
                      Status
                    </Typography>
                    <Edit
                      onClick={() => setEditStatus(true)}
                      style={{ color: "#ffff" }}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box className={classes.headGroup}>
                    <Typography className={classes.headTitle}>
                      Executor
                    </Typography>
                    <AssignIcon
                      size='small'
                      onClick={() => setAssign(true)}
                      style={{ color: "#ffff" }}
                    />
                  </Box>
                </TableCell>
                <TableCell className={classes.headTitle}>Edited</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={props.data._id}>
                <TableCell component='th' scope='row'>
                  {editTask ? (
                    <div>
                      <TextField
                        multiline
                        variant='outlined'
                        defaultValue={taskContent}
                        onBlur={async (e) => {
                          setTaskContent(e.target.value);
                          await props.editTask(props.data._id, e.target.value);
                          setEditTask(false);
                        }}
                      ></TextField>
                    </div>
                  ) : (
                    <Typography align='justify'>
                      {props.data.content}
                    </Typography>
                  )}
                </TableCell>
                <TableCell align='center'>
                  <div>
                    {editStatus ? (
                      <div>
                        <select
                          name='status'
                          onBlur={async (e) => {
                            await props.setStatus(
                              props.data._id,
                              e.target.value
                            );
                            setEditStatus(false);
                          }}
                        >
                          <option />
                          <option value='waiting'>Waiting</option>
                          <option value='implementation'>Implementation</option>
                          <option value='verifying'>Verifying</option>
                          <option value='releasing'>Releasing</option>
                        </select>
                      </div>
                    ) : (
                      <div className={classes.status}>
                        <Typography>
                          {props.data.status.toUpperCase()}
                        </Typography>
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell align='center'>
                  {assign ? (
                    <AssignTo
                      developers={props.developers}
                      setDeveloper={setDeveloper}
                      assignTask={props.assignTask}
                      taskId={props.data._id}
                      setAssign={setAssign}
                    />
                  ) : (
                    <div>
                      <div>{developer}</div>
                      <DevIcon style={{ color: "rgba(245, 0, 87, 1)" }} />
                    </div>
                  )}
                </TableCell>
                <TableCell align='center'>
                  {props.data.updatedAt.slice(0, 10)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ListItem>
    );
  } else {
    return (
      <ListItem>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead className={classes.head}>
              <TableRow>
                <TableCell className={classes.headTitle}>
                  {props.data.name}
                </TableCell>
                <TableCell className={classes.headTitle}>Status</TableCell>
                <TableCell className={classes.headTitle}>Executor</TableCell>
                <TableCell className={classes.headTitle}>Edited</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={props.data._id}>
                <TableCell component='th' scope='row'>
                  <div>{props.data.content}</div>
                </TableCell>
                <TableCell align='center'>
                  <div>
                    {editStatus ? (
                      <div>
                        <select
                          name='status'
                          onBlur={async (e) => {
                            await props.setStatus(
                              props.data._id,
                              e.target.value
                            );
                            setEditStatus(false);
                          }}
                        >
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
                          style={{ color: "#ffff" }}
                        />
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell align='center'>
                  <div>
                    <div>{developer}</div>
                    <DevIcon style={{ color: "rgba(245, 0, 87, 1)" }} />
                  </div>
                </TableCell>
                <TableCell align='center'>
                  {props.data.updatedAt.slice(0, 10)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </ListItem>
    );

    {
      /* <div>
          <a onClick={() => history.push(`/comments/${props.data._id}`)}>
            Comments: {props.data.comments.length}
          </a>
        </div> */
    }
  }
};
export default TaskItem;
