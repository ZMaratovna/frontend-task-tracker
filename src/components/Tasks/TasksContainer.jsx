import React from "react";
import MyTasks from "./MyTasks";
import { connect } from "react-redux";
import {
  deleteTaskThunk,
  editTaskThunk,
  assignTaskThunk,
  setStatusThunk,
  getUserTasksThunk,
} from "../../actions/task.actions";

class TasksContainer extends React.Component {
  async componentDidMount() {
    await this.props.getUserTasksThunk(this.props.match.params.id);
  }

  render() {
    return (
      <MyTasks
        tasks={this.props.tasks}
        deleteTask={this.props.deleteTaskThunk}
        editTask={this.props.editTaskThunk}
        getMyTasks={this.props.getUserTasksThunk}
        setStatus={this.props.setStatusThunk}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.Tasks.userTasks,
  position: state.Session.position,
  username: state.Session.username,
});
TasksContainer = connect(mapStateToProps, {
  deleteTaskThunk,
  editTaskThunk,
  assignTaskThunk,
  getUserTasksThunk,
  setStatusThunk,
})(TasksContainer);
export default TasksContainer;
