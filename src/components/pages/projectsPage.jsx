import React from "react";
import Projects from "../Projects/Projects.jsx";
import AddProject from "../Projects/AddProject";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer/Footer.jsx";
import styles from "../../styles/pages/projectStyle";
const ProjectsPage = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Container className={classes.pageContainer}>
      <Paper className={classes.paperList} elevation={0}>
        <Projects
          projects={props.projects}
          position={props.position}
          userId={props.userId}
          getProject={props.getProject}
          deleteProject={props.deleteProject}
          editProject={props.editProject}
          assignProject={props.assignProject}
          developers={props.developers}
        />
      </Paper>
      <Paper className={classes.paperNew} elevation={0}>
        {props.position === "manager" && (
          <AddProject addProject={props.addProject} userId={props.userId} />
        )}
      </Paper>
      <Footer />
    </Container>
  );
};
export default ProjectsPage;
