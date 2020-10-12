import React from "react";
import Project from "./Project";
import { connect } from "react-redux";
import {
  assignProjectThunk,
  getProjectThunk,
} from "../../actions/project.actions";
import { getDevelopersThunk } from "../../actions/user.actions";
import {
  fetchTasks,
  deleteTaskThunk,
  addTaskThunk,
  editTaskThunk,
  assignTaskThunk,
  setStatusThunk,
  getUserTasksThunk,
} from "../../actions/task.actions";

class ProjectContainer extends React.Component {
  async componentDidMount() {
    await this.props.getDevelopersThunk();
    await this.props.getProjectThunk(this.props.match.params.id);
    await this.props.fetchTasks(this.props.match.params.id);
  }

  render() {
    return (
      <Project
        project={this.props.project}
        tasks={this.props.tasks}
        //fetchTasks={this.props.fetchTasks}
        assignProject={this.props.assignProjectThunk}
        deleteTask={this.props.deleteTaskThunk}
        addTask={this.props.addTaskThunk}
        editTask={this.props.editTaskThunk}
        getMyTasks={this.props.getUserTasksThunk}
        setStatus={this.props.setStatusThunk}
        developers={this.props.developers}
        assignTask={this.props.assignTaskThunk}
        position={this.props.position}
        userId={this.props.userId}
        username={this.props.usename}
        projectId={this.props.match.params.id}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  position: state.Session.position,
  userId: state.Session.id,
  username: state.Session.username,
  project: state.Projects.current,
  tasks: state.Tasks.projectTasks,
  developers: state.User.developers,
});
ProjectContainer = connect(mapStateToProps, {
  getProjectThunk,
  assignProjectThunk,
  fetchTasks,
  deleteTaskThunk,
  addTaskThunk,
  editTaskThunk,
  assignTaskThunk,
  getUserTasksThunk,
  setStatusThunk,
  getDevelopersThunk,
})(ProjectContainer);
export default ProjectContainer;
