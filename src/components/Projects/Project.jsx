import React from "react";
import TaskList from "../Tasks/TaskList";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/components/project/styles.js";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
const Project = (props) => {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  if (props.project) {
    return (
      <Container className={classes.ProjectContainer}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link color='inherit' href='/projects'>
            MyProjects
          </Link>
          <Typography color='primary'>{props.project.name}</Typography>
        </Breadcrumbs>
        <Box className={classes.ProjectBox}>
          <Typography className={classes.titleBox} variant='h3' component='h1'>
            <span className={classes.titleIntro}>PROJECT: </span>
            {props.project.name}
          </Typography>

          <Typography className={classes.textBox} component='p' variant='h6'>
            <span className={classes.titleIntro}>DESCRIPTION: </span>
            {props.project.content}
          </Typography>
        </Box>
        <Typography className={classes.titleIntro} component='p' variant='h6'>
          TASKS
        </Typography>
        <TaskList {...props} />
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Project;
