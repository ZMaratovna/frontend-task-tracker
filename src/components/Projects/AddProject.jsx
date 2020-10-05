import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Typography, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";

export default function AddProject(props) {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState({});
  const [newContent, setNewContent] = useState({});

  const useStyles = makeStyles((theme) => ({
    buttonBlock: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttonText: {
      alignSelf: "center",
      marginRight: "10px",
    },
    addTaskBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "spaceBetween",
      alignSelf: "center",
      width: "50%",
    },
  }));

  const classes = useStyles();
  return (
    <Container>
      {!editMode ? (
        <div className={classes.buttonBlock}>
          <div className={classes.buttonText}>
            <Typography color='primary'>ADD NEW PROJECT</Typography>
          </div>
          <Fab size='small' color='primary' aria-label='add'>
            <AddIcon onClick={() => setEditMode(true)} />
          </Fab>
        </div>
      ) : (
        <Box className={classes.addTaskBox}>
          <Typography color='primary'>ADD NEW PROJECT</Typography>
          <Input
            placeholder='Enter title for your project'
            name='name'
            onChange={(e) => setNewName(e.target.value)}
          />

          <Input
            placeholder='Description'
            name='content'
            onChange={(e) => setNewContent(e.target.value)}
          />
          <Fab size='small' color='primary' aria-label='add'>
            <AddIcon
              onClick={() => {
                props.addProject(props.userId, {
                  name: newName,
                  content: newContent,
                });
                setEditMode(false);
              }}
            />
          </Fab>
        </Box>
      )}
    </Container>
  );
}
