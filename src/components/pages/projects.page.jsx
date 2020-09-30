import React from "react";
import Projects from "../Projects/ProjectItem.jsx";
import AddProject from "../Projects/AddProject";

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  render() {
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
