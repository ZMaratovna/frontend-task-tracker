import React, { useState } from "react";

const AssignTo = (props) => {
  const [editMode, setEditMode] = useState(true);
  const handleAssign = async (e) => {
    setEditMode(false);
    props.setAssign(false);
  };
  const handleChange = async (e) => {};
  return (
    <div>
      {editMode ? (
        <div>
          <select
            onBlur={handleAssign}
            onChange={async (e) => {
              const index = e.target.selectedIndex;
              const devId = e.target.options[index].id;
              const devname = e.target.options[index].value;
              props.setDeveloper(devname);

              {
                props.isProject
                  ? await props.assignProject(
                      { devId, devname },
                      props.projectId
                    )
                  : await props.assignTask({ devId, devname }, props.taskId);
              }
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
