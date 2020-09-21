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
  componentDidMount() {
    let userId = localStorage.getItem("userId");
    this.props.getProjectsThunk(userId);
  }
  render() {
    return (
      <ProjectsPage
        projects={this.props.projects}
        userId={this.props.userId}
        addProject={this.props.addProjectThunk}
        getProject={this.props.getProjectsThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  projects: state.Projects.projects,
  userId: localStorage.getItem("userId"),
});

export default connect(mapStateToProps, {
  getProjectsThunk,
  getProjectThunk,
  addProjectThunk,
  assignProjectThunk,
})(ProjectsPageContainer);
