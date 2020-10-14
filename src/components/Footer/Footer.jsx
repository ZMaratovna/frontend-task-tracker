import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import styles from "../../styles/components/footer/footer";

const Footer = () => {
  const useStyles = makeStyles((theme) => styles(theme));
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography className={classes.text}>
        Copyright &copy; 2020 TaskTracker. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
