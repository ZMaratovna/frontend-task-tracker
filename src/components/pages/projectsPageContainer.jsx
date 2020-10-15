import React, { useEffect } from "react";
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

const ProjectsPageContainer = (props) => {
  useEffect(() => {
    props.getProjectsThunk(props.userId);
    props.getDevelopersThunk();
  }, []);

  return (
    <ProjectsPage
      projects={props.projects}
      userId={props.userId}
      addProject={props.addProjectThunk}
      getProject={props.getProjectThunk}
      editProject={props.editProjectThunk}
      assignProject={props.assignProjectThunk}
      deleteProject={props.deleteProjectThunk}
      developers={props.developers}
      position={props.position}
    />
  );
};

const mapStateToProps = (state) => ({
  projects: state.Projects.projects,
  userId: state.Session.id,
  developers: state.User.developers,
  position: state.Session.position,
});

export default connect(mapStateToProps, {
  getProjectsThunk,
  getProjectThunk,
  addProjectThunk,
  assignProjectThunk,
  editProjectThunk,
  deleteProjectThunk,
  getDevelopersThunk,
})(ProjectsPageContainer);
