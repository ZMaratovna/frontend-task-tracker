import React from "react";
import Project from "./Project";
import { connect } from "react-redux";
import {
  assignProjectThunk,
  getProjectThunk,
} from "../../actions/project.actions";
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
    await this.props.getProjectThunk(this.props.match.params.id);
    await this.props.fetchTasks(this.props.match.params.id);
  }

  render() {
    return (
      <Project
        project={this.props.project}
        tasks={this.props.tasks}
        assignProject={this.props.assignProjectThunk}
        deleteTask={this.props.deleteTaskThunk}
        addTask={this.props.addTaskThunk}
        editTask={this.props.editTaskThunk}
        getMyTasks={this.props.getUserTasksThunk}
        setStatus={this.props.setStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  project: state.Projects.current,
  tasks: state.Tasks.projectTasks,
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
})(ProjectContainer);
export default ProjectContainer;
