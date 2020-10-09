import React from "react";
import { Container, makeStyles, List } from "@material-ui/core";
import ProjectItem from "./ProjectItem";
import styles from "../../styles/pages/projectStyle.js";
const Projects = (props) => {
  const useStyle = makeStyles(styles);
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
