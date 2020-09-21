import React from "react";

export default function TaskItem(props) {
  return (
    <li>
      <h2>{props.data.name}</h2>
      <p>{props.data.content}</p>
    </li>
  );
}
