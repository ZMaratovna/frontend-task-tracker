import React from "react";
import { Container, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import styles from "../../styles/pages/SplashStyle.js";
import ListItem from "@material-ui/core/ListItem";
import ListIcon from "@material-ui/icons/TripOrigin";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Emoji from "../emoji";

const SplashPage = (props) => {
  const useStyle = makeStyles(styles);
  const classes = useStyle();
  return (
    <Container>
      <Box width='100%' height='100%'>
        <Paper className={classes.paperContainer}>
          <Box className={classes.manContainer}>
            <h2 className={classes.title}>
              You are Manager? <Emoji symbol='🧑‍💼' />
            </h2>

            <List>
              <ListItem classname={classes.ListItem} divider>
                <ListItemIcon>
                  <ListIcon className={classes.ListIcon} />
                </ListItemIcon>
                <ListItemText>Create Projects</ListItemText>
              </ListItem>
              <ListItem divider>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>
                  See a list of all the Projects you have created
                </ListItemText>
              </ListItem>
              <ListItem divider>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>
                  See a list of all the Projects you have created
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>
                  See a list of all tasks for the selected project>/
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>Add Developer to Project</ListItemText>
              </ListItem>
              <ListItem>
                <ListIcon className={classes.ListIcon} />
                <ListItemText> Assign Task to Developer</ListItemText>
              </ListItem>
              <ListItem>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>
                  Add / remove / edit Comment within Task
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListIcon className={classes.ListIcon} />
                <ListItemText>
                  Change Task status. Available statuses:{" "}
                  <em>waiting, implementation, verifying, releasing</em>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
          <Box className={classes.devContainer}>
            <h2 className={classes.title}>
              You are Developer? <Emoji symbol='🧑‍💻' />
            </h2>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ListIcon className={classes.ListIcon} />
                </ListItemIcon>
                <ListItemText>
                  See a list of all projects in which you participate
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ListIcon className={classes.ListIcon} />
                </ListItemIcon>
                <ListItemText>
                  See a list of all tasks for the selected project
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ListIcon className={classes.ListIcon} />
                </ListItemIcon>
                <ListItemText>
                  Filter tasks: show tasks that only need to be performed by you
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ListIcon className={classes.ListIcon} />
                </ListItemIcon>
                <ListItemText>
                  Change Task status. Available statuses:{" "}
                  <em>waiting, implementation, verifying, releasing</em>
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SplashPage;
