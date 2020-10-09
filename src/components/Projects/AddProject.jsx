import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { Typography, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import styles from "../../styles/components/project/styles.js";

export default function AddProject(props) {
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState({});
  const [newContent, setNewContent] = useState({});
  const wrapperRef = React.useRef();

  const handleClick = (e) => {
    if (wrapperRef.current) {
      if (!wrapperRef.current.contains(e.target)) {
        setEditMode(false);
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const useStyles = makeStyles(styles);

  const classes = useStyles();
  return (
    <Container className={classes.AddContainer}>
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
        <Box className={classes.addProjectBox} ref={wrapperRef}>
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
          <Button
            className={classes.addButton}
            variant='contained'
            color='secondary'
            size='small'
            color='primary'
            aria-label='add'
            onClick={() => {
              props.addProject(props.userId, {
                name: newName,
                content: newContent,
              });
              setEditMode(false);
            }}
          >
            <Typography variant='button-text'>ADD </Typography>
          </Button>
        </Box>
      )}
    </Container>
  );
}
