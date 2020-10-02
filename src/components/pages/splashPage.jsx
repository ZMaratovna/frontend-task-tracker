import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  SvgIcon,
  Paper,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Image from "../../img/good_team.svg";
const SplashPage = (props) => {
  const useStyle = makeStyles((theme) => ({
    paperContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      flexGrow: 1,
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundPosition: "center center",
      backgroundSize: "contain",
      backgroundAttachment: "fixed",
    },
    titleContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      width: "100%",
    },
    title: {
      textAlign: "center",
      padding: "20px",
    },
  }));
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
