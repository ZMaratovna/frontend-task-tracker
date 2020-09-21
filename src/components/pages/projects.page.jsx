import React from "react";
import { API } from "../../API/api";
import Projects from "../projects.component";
import AddProject from "../AddProject";

class ProjectsPage extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Projects
          projects={this.props.projects}
          userId={this.props.userId}
          getProject={this.props.getProject}
        />
        <AddProject
          addProject={this.props.addProject}
          userId={this.props.userId}
        />
      </div>
    );
  }
}
export default ProjectsPage;
