import React, { useState } from "react";

const AddTask = (props) => {
  const [newName, setNewName] = useState({});
  const [newContent, setNewContent] = useState({});
  return (
    <li>
      <h3>Add new task</h3>
      <input
        placeholder='Enter title for your task'
        name='name'
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        placeholder='Description'
        name='content'
        onChange={(e) => setNewContent(e.target.value)}
      />

      <input
        type='button'
        value='+'
        onClick={(e) =>
          props.addTask(props.projectId, {
            name: newName,
            content: newContent,
          })
        }
      />
    </li>
  );
};

export default AddTask;
