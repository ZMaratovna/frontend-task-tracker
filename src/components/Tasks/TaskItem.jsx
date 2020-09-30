import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AssignTo from "./AssignTo";

const TaskItem = (props) => {
  let history = useHistory();
  let executor = props.data.executor;
  if (executor) {
    executor = props.developers.find((dev) => dev._id === executor).username;
    console.log("executor", executor);
  } else {
    executor = "not assign";
  }

  const [editTask, setEditTask] = useState(false);
  const [taskContent, setTaskContent] = useState(props.data.content);
  const [assign, setAssign] = useState(null);
  const [editStatus, setEditStatus] = useState(false);
  const [developer, setDeveloper] = useState(executor);

  if (props.position === "manager") {
    console.log("load manager tasks");
    return (
      <li>
        <h2>{props.data.name}</h2>
        {editTask ? (
          <div>
            <textarea
              defaultValue={taskContent}
              onBlur={async (e) => {
                setTaskContent(e.target.value);
                await props.editTask(props.data._id, e.target.value);
                setEditTask(false);
              }}
            ></textarea>
          </div>
        ) : (
          <div>
            <span>{props.data.content}</span>
            <button onClick={() => setEditTask(true)}>Edit</button>
          </div>
        )}
        {props.position === "manager" && (
          <button onClick={() => props.deleteTask(props.data._id)}>
            Delete
          </button>
        )}
        {assign ? (
          <AssignTo
            developers={props.developers}
            setDeveloper={setDeveloper}
            assignTask={props.assignTask}
            taskId={props.data._id}
            setAssign={setAssign}
          />
        ) : (
          <div>
            <span>Executor:{developer}</span>
            <button onClick={() => setAssign(true)}>Assign</button>
          </div>
        )}

        {editStatus ? (
          <div>
            <select
              name='status'
              onBlur={async (e) => {
                await props.setStatus(props.data._id, e.target.value);
                setEditStatus(false);
              }}
            >
              <option />
              <option value='waiting'>Waiting</option>
              <option value='implementation'>Implementation</option>
              <option value='verifying'>Verifying</option>
              <option value='releasing'>Releasing</option>
            </select>
          </div>
        ) : (
          <span>
            Status: {props.data.status}
            <button onClick={() => setEditStatus(true)}>Set status</button>
          </span>
        )}
        <div>
          <span>Edited: {props.data.updatedAt}</span>
        </div>
        <div>
          <a onClick={() => history.push(`/comments/${props.data._id}`)}>
            Comments: {props.data.comments.length}
          </a>
        </div>
      </li>
    );
  } else {
    return (
      <li>
        <h2>{props.data.name}</h2>
        <div>{props.data.content}</div>

        <p>Executor:{executor}</p>
        <span>
          Status: {props.data.status}
          {props.data.executor === props.userId && (
            <button onClick={() => setEditStatus(true)}>Set status</button>
          )}
        </span>
        <div>
          <span>Edited: {props.data.updatedAt}</span>
          <div>
            <a onClick={() => history.push(`/comments/${props.data._id}`)}>
              Comments: {props.data.comments.length}
            </a>
          </div>
        </div>
      </li>
    );
  }
};
export default TaskItem;
