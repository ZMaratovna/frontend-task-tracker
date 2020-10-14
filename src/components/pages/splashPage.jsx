import React from "react";
import Slider_manager from "../slider_man.jsx";
import Slider_developer from "../slider_dev.jsx";
import { Container, Paper, List } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import styles from "../../styles/pages/SplashStyle.js";
import Typography from "@material-ui/core/Typography";
import Footer from "../Footer/Footer.jsx";

const SplashPage = (props) => {
  const useStyle = makeStyles((theme) => styles(theme));
  const classes = useStyle();
  return (
    <Container>
      <Paper className={classes.paperContainer} elevation={0}>
        <Box className={classes.startPage}>
          <Typography variant='h1' className={classes.mainTitle}>
            Welcome to TaskTracker
          </Typography>
        </Box>
        <div className={classes.wave}></div>
        <Box className={classes.info}>
          <Box className={classes.manContainer}>
            <Typography variant='h3' component='h1'>
              MANAGER
            </Typography>
            <Slider_manager />
          </Box>

          <Box className={classes.devContainer}>
            <Typography variant='h2' component='h1'>
              DEVELOPER
            </Typography>
            <Box className={classes.sliderBox}>
              <Slider_developer />
            </Box>
          </Box>
        </Box>
      </Paper>
      <Footer />
    </Container>
  );
};

export default SplashPage;
