import React from "react";
import ProjectsPage from "./projectsPage";
import {
  getProjectThunk,
  getProjectsThunk,
  addProjectThunk,
  editProjectThunk,
  deleteProjectThunk,
  assignProjectThunk,
} from "../../actions/project.actions";
import { connect } from "react-redux";
import { getDevelopersThunk } from "../../actions/user.actions";

class ProjectsPageContainer extends React.Component {
  componentDidMount() {
    this.props.getProjectsThunk(this.props.userId);
    this.props.getDevelopersThunk();
  }

  render() {
    return (
      <ProjectsPage
        projects={this.props.projects}
        userId={this.props.userId}
        addProject={this.props.addProjectThunk}
        getProject={this.props.getProjectThunk}
        editProject={this.props.editProjectThunk}
        assignProject={this.props.assignProjectThunk}
        deleteProject={this.props.deleteProjectThunk}
        developers={this.props.developers}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.Projects.projects,
  userId: state.Session.id,
  developers: state.User.developers,
});

ProjectsPageContainer = connect(mapStateToProps, {
  getProjectsThunk,
  getProjectThunk,
  addProjectThunk,
  assignProjectThunk,
  editProjectThunk,
  deleteProjectThunk,
  getDevelopersThunk,
})(ProjectsPageContainer);

export default ProjectsPageContainer;
