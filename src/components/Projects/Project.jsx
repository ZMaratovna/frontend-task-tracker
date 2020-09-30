import React from "react";
import TaskList from "../Tasks/TaskList";

class Project extends React.Component {
  render() {
    if (this.props.project) {
      return (
        <div>
          <h1>{this.props.project.name}</h1>
          <p>{this.props.project.content}</p>
          <h2>Tasks</h2>
          <TaskList {...this.props} />
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Project;
