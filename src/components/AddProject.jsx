import React, { useState } from "react";

export default function AddProject(props) {
  const [newName, setNewName] = useState({});
  const [newContent, setNewContent] = useState({});
  return (
    <li>
      <h3>Add new project</h3>
      <input
        placeholder='Enter title for your project'
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
          props.addProject(props.userId, {
            name: newName,
            content: newContent,
          })
        }
      />
    </li>
  );
}
