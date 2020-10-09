import React from "react";
import Projects from "../Projects/Projects.jsx";
import AddProject from "../Projects/AddProject";
import Box from "@material-ui/core/Box";

const ProjectsPage = (props) => {
  return (
    <Box
      style={{
        width: "70%",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <Projects
        projects={props.projects}
        userId={props.userId}
        getProject={props.getProject}
        deleteProject={props.deleteProject}
        editProject={props.editProject}
        assignProject={props.assignProject}
        developers={props.developers}
      />
      <AddProject addProject={props.addProject} userId={props.userId} />
    </Box>
  );
};
export default ProjectsPage;
