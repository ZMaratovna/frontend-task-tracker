import React from "react";
import ProjectsPage from "./projects.page";
import {
  getProjectThunk,
  getProjectsThunk,
  addProjectThunk,
  assignProjectThunk,
} from "../../actions/project.actions";
import { connect } from "react-redux";

class ProjectsPageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    await this.props.getProjectsThunk(this.props.userId);
  }

  render() {
    return (
      <ProjectsPage
        projects={this.props.projects}
        userId={this.props.userId}
        addProject={this.props.addProjectThunk}
        getProject={this.props.getProjectThunk}
        assignProject={this.props.assignProjectThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.Projects.projects,
  userId: state.Session.id,
});

ProjectsPageContainer = connect(mapStateToProps, {
  getProjectsThunk,
  getProjectThunk,
  addProjectThunk,
  assignProjectThunk,
})(ProjectsPageContainer);

export default ProjectsPageContainer;
