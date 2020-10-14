import React from "react";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styles";
import AnimationStyles from "react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss";
import Box from "@material-ui/core/Box";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/components/slider";
const onAnimationStart = () => {};
const onAnimationEnd = () => {};
const onFirstMount = () => {};

const Slider = () => {
  const useStyle = makeStyles(styles);
  const classes = useStyle();
  return (
    <AwesomeSlider
      cssModule={AwesomeSliderStyles}
      onFirstMount={onFirstMount}
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      <Box className={classes.sliderItem_4}>
        <Typography
          className={classes.sliderText}
          gutterBottom
          variant='h3'
          component='h2'
        >
          Your Projects
        </Typography>
        <Typography variant='h5' color='textSecondary' component='p'>
          See a list of all projects in which you participate
        </Typography>
      </Box>

      <Box className={classes.sliderItem_5}>
        <Typography
          className={classes.sliderText}
          gutterBottom
          variant='h3'
          component='h2'
        >
          See a list of all tasks for the selected project
        </Typography>
      </Box>
      <Box className={classes.sliderItem_6}>
        <Typography
          className={classes.sliderText}
          gutterBottom
          variant='h3'
          component='h2'
        >
          Filter tasks: show tasks that only need to be performed by you
        </Typography>
        <Typography variant='h5' color='textSecondary' component='p'>
          Change task status
        </Typography>
      </Box>
    </AwesomeSlider>
  );
};
export default Slider;
