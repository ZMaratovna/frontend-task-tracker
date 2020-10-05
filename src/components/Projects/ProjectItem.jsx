import React from "react";
import { useHistory } from "react-router-dom";
import { Container, makeStyles, Typography, List } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ListItem from "@material-ui/core/ListItem";

export default function ProjectItem(props) {
  const history = useHistory();

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const useStyle = makeStyles((theme) => ({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    listWrapper: {
      width: "100vw",
      alignSelf: "center",
      textAlign: "left",
    },
    listItem: {
      borderBottom: "2px solid #3f51b5",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      padding: "10px",
      listStyleType: "none",
    },

    button: {
      height: "50%",
      alignSelf: "center",
    },
  }));
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <List className={classes.listWrapper}>
        {props.projects.map((project, index) => (
          <ListItem
            key={project._id}
            className={classes.listItem}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
          >
            <div>
              <Typography variant='h6'>{project.name}</Typography>
              <Typography variant='body1'>{project.content}</Typography>
            </div>
            <Button
              className={classes.button}
              variant='outlined'
              color='secondary'
              onClick={() => {
                props.getProject(project._id);
                history.push(`/projects/${project._id}`);
              }}
            >
              more details
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
