import React from "react";
import Projects from "../Projects/ProjectItem.jsx";
import AddProject from "../Projects/AddProject";
import Box from "@material-ui/core/Box";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  render() {
    return (
      <Box
        style={{
          marginTop: "94px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <Projects
          projects={this.props.projects}
          userId={this.props.userId}
          getProject={this.props.getProject}
        />
        <AddProject
          addProject={this.props.addProject}
          userId={this.props.userId}
        />
      </Box>
    );
  }
}
export default ProjectsPage;
