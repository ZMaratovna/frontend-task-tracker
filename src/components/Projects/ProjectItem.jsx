import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Typography } from "@material-ui/core";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";
import AssignIcon from "@material-ui/icons/AssignmentInd";
import Edit from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import TextField from "@material-ui/core/TextField";
import AssignTo from "../Tasks/AssignTo";
import Box from "@material-ui/core/Box";
import styles from "../../styles/components/project/styles.js";

const ProjectItem = (props) => {
  const history = useHistory();
  const [editProject, setEditProject] = useState(false);
  const [assign, setAssign] = useState(null);
  const [developer, setDeveloper] = useState("");

  const useStyle = makeStyles(styles);
  const classes = useStyle();
  return (
    <ListItem key={props.index} className={classes.listItem}>
      <div>
        <Typography variant='h6'>{props.project.name}</Typography>
        {editProject ? (
          <TextField
            multiline
            variant='outlined'
            defaultValue={props.project.content}
            onBlur={async (e) => {
              console.log("textarea value", e.target.value);
              await props.editProject(props.project._id, e.target.value);
              setEditProject(false);
            }}
          ></TextField>
        ) : (
          <div>
            <Typography variant='body1'>{props.project.content}</Typography>
            {assign ? (
              <AssignTo
                developers={props.developers}
                projectId={props.project._id}
                setAssign={setAssign}
                setDeveloper={setDeveloper}
                isProject={true}
                assignProject={props.assignProject}
              />
            ) : (
              <Box>
                <Typography variant='h6'> Developers:</Typography>
                <Typography>
                  {" "}
                  {props.developers ? (
                    <div>
                      {props.developers
                        .filter((dev) =>
                          dev.projects.includes(props.project._id)
                        )
                        .map((dev) => dev.username)
                        .join(", ") +
                        ", " +
                        developer}
                    </div>
                  ) : (
                    <div>Can't find anyone</div>
                  )}
                </Typography>
              </Box>
            )}
          </div>
        )}
        <Button
          className={classes.button}
          color='secondary'
          variant='text'
          onClick={() => {
            props.getProject(props.project._id);
            history.push(`/projects/${props.project._id}`);
          }}
        >
          more details
        </Button>
      </div>
      <ButtonGroup
        size='small'
        orientation='vertical'
        color='primary'
        aria-label='vertical contained primary button group'
        variant='text'
      >
        <Button>
          <Edit onClick={() => setEditProject(true)} />
        </Button>
        <Button>
          <AssignIcon
            onClick={() => {
              setAssign(true);
            }}
          />
        </Button>
        <Button>
          <DeleteIcon
            onClick={() => {
              props.deleteProject(props.project._id);
            }}
          />
        </Button>
      </ButtonGroup>
    </ListItem>
  );
};

export default ProjectItem;
