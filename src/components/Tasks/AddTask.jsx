import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Typography, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styles from "../../styles/components/task/addTaskStyle.js";

const AddTask = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState({});
  const [newContent, setNewContent] = useState({});

  const wrapperRef = useRef();
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const handleClick = (e) => {
    if (wrapperRef.current) {
      if (!wrapperRef.current.contains(e.target)) {
        setEditMode(false);
      }
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <Container className={classes.addContainer}>
      {!editMode ? (
        <div className={classes.buttonBlock}>
          <div className={classes.buttonText}>
            <Typography color='primary'>ADD NEW TASK</Typography>
          </div>
          <Fab size='small' color='primary' aria-label='add'>
            <AddIcon onClick={() => setEditMode(true)} />
          </Fab>
        </div>
      ) : (
        <Box className={classes.addTaskBox} ref={wrapperRef}>
          <Typography color='primary'>ADD NEW TASK</Typography>
          <Input
            placeholder='Enter title for your task'
            name='name'
            onChange={(e) => setNewName(e.target.value)}
          />

          <Input
            placeholder='Description'
            name='content'
            onChange={(e) => setNewContent(e.target.value)}
          />

          <Button
            className={classes.addButton}
            variant='contained'
            color='primary'
            onClick={() => {
              props.addTask(props.projectId, {
                name: newName,
                userId: props.userId,
                content: newContent,
              });
              setEditMode(false);
            }}
          >
            ADD
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default AddTask;
