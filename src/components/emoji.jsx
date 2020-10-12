import React from "react";
import styles from "../styles/pages/SplashStyle.js";
import { makeStyles } from "@material-ui/core";

const Emoji = (props) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <span
      className={classes.emoji}
      role='img'
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );
};

export default Emoji;
