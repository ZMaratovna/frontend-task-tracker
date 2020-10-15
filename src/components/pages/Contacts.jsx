import React from "react";
import classNames from "classnames";
import { Paper, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import styles from "../../styles/pages/Contacts";
import Box from "@material-ui/core/Box";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import Footer from "../Footer/Footer";

const Contacts = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  const spanClasses1 = classNames({
    [classes.char]: true,
    [classes.char1]: true,
  });
  const spanClasses2 = classNames({
    [classes.char]: true,
    [classes.char2]: true,
  });
  const spanClasses3 = classNames({
    [classes.char]: true,
    [classes.char3]: true,
  });
  const spanClasses4 = classNames({
    [classes.char]: true,
    [classes.char4]: true,
  });
  const spanClasses5 = classNames({
    [classes.char]: true,
    [classes.char5]: true,
  });
  const spanClasses6 = classNames({
    [classes.char]: true,
    [classes.char6]: true,
  });
  const spanClasses7 = classNames({
    [classes.char]: true,
    [classes.char7]: true,
  });
  const spanClasses8 = classNames({
    [classes.char]: true,
    [classes.char8]: true,
  });

  return (
    <Container>
      <Paper className={classes.Paper} elevation={0}>
        <div className={classes.wave}></div>
        <Box className={classes.contactsBox}>
          <span className={spanClasses1}>c</span>
          <span className={spanClasses2}>o</span>
          <span className={spanClasses3}>n</span>
          <span className={spanClasses4}>t</span>
          <span className={spanClasses5}>a</span>
          <span className={spanClasses6}>c</span>
          <span className={spanClasses7}>t</span>
          <span className={spanClasses8}>s</span>
        </Box>
        <Box className={classes.iconBox}>
          <span>
            <TelegramIcon className={classes.icon} />
          </span>
          <span>
            <GitHubIcon className={classes.icon} />
          </span>

          <span>
            <FacebookIcon className={classes.icon} />
          </span>
          <span>
            <MailIcon className={classes.icon} />
          </span>
        </Box>
      </Paper>
      <Footer />
    </Container>
  );
};

export default Contacts;
