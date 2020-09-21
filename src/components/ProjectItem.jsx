import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";

export default function ProjectItem(props) {
  let history = useHistory();
  return (
    <li>
      <h2>{props.project.name}</h2>
      <p>{props.project.content}</p>
      <span>Tasks: {props.project.tasks.length}</span>
      <button
        data-project={props.number}
        onClick={(e) => {
          props.getProject(props.projectId);
          history.push(`/projectinfo/${props.project._id}`);
        }}
      >
        Get info
      </button>
    </li>
  );
}
