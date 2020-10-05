import React, { useState } from "react";

const AssignTo = (props) => {
  const developers = props.developers;
  const [editMode, setEditMode] = useState(true);
  const [developer, setDev] = useState("");

  return (
    <div>
      {editMode ? (
        <div>
          <select
            onBlur={async (e) => {
              setEditMode(false);
              props.setAssign(false);
            }}
            onChange={async (e) => {
              const index = e.target.selectedIndex;

              const devId = e.target.options[index].id;

              const devname = e.target.options[index].value;
              props.setDeveloper(devname);

              await props.assignTask({ devId, devname }, props.taskId);
            }}
          >
            <option></option>
            {props.developers.map((dev) => (
              <option name={dev.username} id={dev._id}>
                {dev.username}
              </option>
            ))}
          </select>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AssignTo;