import React from "react";
import TaskList from "../Tasks/TaskList";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
    };
  }

  render() {
    if (this.props.project && this.props.tasks) {
      return (
        <div>
          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.content}</p>
          <h2>Tasks</h2>
          <TaskList
            projectId={this.props.project._id}
            tasks={this.props.tasks}
            addTask={this.props.addTask}
            editTask={this.props.editTask}
            deleteTask={this.props.deleteTask}
            setStatus={this.props.setStatus}
          />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Project;
