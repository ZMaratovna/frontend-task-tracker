import React from "react";
import TaskList from "../Tasks/TaskList";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/project/styles.js";
const Project = (props) => {
  const useStyles = makeStyles(styles);

  const classes = useStyles();
  if (props.project) {
    return (
      <Container className={classes.ProjectContainer}>
        <Box className={classes.textBox}>
          <Typography variant='h2' component='h1'>
            {props.project.name}
          </Typography>

          <Typography component='p' variant='subtitle1'>
            {props.project.content}
          </Typography>
        </Box>
        <Typography variant='h4'>Tasks</Typography>
        <TaskList {...props} />
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Project;
