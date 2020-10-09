import React, { useState } from "react";

import { Container, makeStyles, List } from "@material-ui/core";
import ProjectItem from "./ProjectItem";
const Projects = (props) => {
  const useStyle = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    listWrapper: {
      width: "100%",
      alignSelf: "center",
      textAlign: "left",
    },
    button: {
      height: "50%",
      alignSelf: "center",
    },
  }));
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <List className={classes.listWrapper}>
        {props.projects.map((project, index) => (
          <ProjectItem project={project} index={index} {...props} />
        ))}
      </List>
    </Container>
  );
};
export default Projects;
