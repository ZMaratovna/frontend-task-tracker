import React, { useState } from "react";

const TaskItem = (props) => {
  console.log("taskItemProps", props);

  const [editTask, setEditTask] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  console.log("editTask", editTask);
  console.log("editStatus", editStatus);
  return (
    <li>
      <h2>{props.data.name}</h2>
      {editTask ? (
        <div>
          <textarea
            onBlur={async (e) => {
              await props.editTask(props.data._id, e.target.value);
              setEditTask(false);
            }}
          >
            {props.data.content}
          </textarea>
        </div>
      ) : (
        <p>{props.data.content}</p>
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
      <span>
        <button onClick={() => setEditTask(true)}>Edit</button>
        <button>Delete</button>
      </span>
    </li>
  );
};
export default TaskItem;
