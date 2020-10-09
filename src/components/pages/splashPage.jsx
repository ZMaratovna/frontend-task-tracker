import React from "react";
import { Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import styles from "../../styles/pages/SplashStyle.js";

const SplashPage = (props) => {
  const useStyle = makeStyles(styles);
  const classes = useStyle();
  return (
    <Container>
      <Box width='100%' height='100%'>
        <Paper className={classes.paperContainer}>
          <Box className={classes.titleContainer}>
            <h1 className={classes.title}>Welcome to TaskTracker!</h1>
            <h2 className={classes.title}>
              In order to use TaskTracker, you must create an account or log in
              for system
            </h2>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SplashPage;
