import React from "react";
import { Paper, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import styles from "../../styles/pages/Contacts";
import Box from "@material-ui/core/Box";

const Contacts = () => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Container>
      <Paper className={classes.Paper}>
        <Box className={classes.contactsBox}>
          <Typography className={classes.contactsText} variant='h2'>
            Contacts
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Contacts;
