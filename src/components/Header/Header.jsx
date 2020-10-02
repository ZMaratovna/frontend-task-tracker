import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

const Header = (props) => {
  const useStyle = makeStyles((theme) => ({
    root: { flexGrow: 1 },
    menuButton: { marginRight: theme.spacing(1) },
    title: {
      flexGrow: 1,
    },
    avatar: {
      backgroundColor: "rgba(255, 136, 0, 1)",
    },
  }));
  const classes = useStyle();
  return (
    <div>
      {props.isLoggedIn ? (
        <AppBar position='fixed'>
          <Container>
            <Toolbar>
              <IconButton edge='end' className={classes.menuButton}>
                <MenuIcon color='secondary'></MenuIcon>
              </IconButton>
              <Typography variant='h6' className={classes.title}>
                Task Tracker
              </Typography>
              <Box>
                <Button
                  className={classes.menuButton}
                  variant='outlined'
                  color='inherit'
                  onClick={async (e) => {
                    e.preventDefault();
                    props.logout();
                  }}
                >
                  Log Out
                </Button>
                <Box>
                  <Avatar className={classes.avatar}>
                    {props.position[0]}
                  </Avatar>
                  {props.userName}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      ) : (
        <AppBar position='fixed'>
          <Container>
            <Toolbar>
              <IconButton edge='end' className={classes.menuButton}>
                <MenuIcon color='secondary'></MenuIcon>
              </IconButton>
              <Typography variant='h6' className={classes.title}>
                Task Tracker
              </Typography>
              <Button
                href='/auth'
                className={classes.menuButton}
                variant='outlined'
                color='inherit'
              >
                Log In
              </Button>
              <Button variant='contained' color='secondary' href='/register'>
                Sign Up
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </div>
  );
};

export default Header;
