import React, { useEffect } from "react";
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

const ProjectContainer = (props) => {
  useEffect(() => {
    const fetchData = async () => {
      props.getDevelopersThunk();
      props.getProjectThunk(props.match.params.id);
      await props.fetchTasks(props.match.params.id);
    };
    fetchData();
  }, []);

  return (
    <Project
      project={props.project}
      tasks={props.tasks}
      assignProject={props.assignProjectThunk}
      deleteTask={props.deleteTaskThunk}
      addTask={props.addTaskThunk}
      editTask={props.editTaskThunk}
      getMyTasks={props.getUserTasksThunk}
      setStatus={props.setStatusThunk}
      developers={props.developers}
      assignTask={props.assignTaskThunk}
      position={props.position}
      userId={props.userId}
      username={props.usename}
      projectId={props.match.params.id}
    />
  );
};

const mapStateToProps = (state) => ({
  position: state.Session.position,
  userId: state.Session.id,
  username: state.Session.username,
  project: state.Projects.current,
  tasks: state.Tasks.projectTasks,
  developers: state.User.developers,
});
export default connect(mapStateToProps, {
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
