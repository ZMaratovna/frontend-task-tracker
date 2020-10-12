import React, { useRef, useState } from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Menu from "../menuList";

import styles from "../../styles/components/header/headerStyle.js";

const Header = (props) => {
  const useStyle = makeStyles(styles);
  const classes = useStyle();
  const menuRef = useRef();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <AppBar position='fixed'>
        <Container>
          <Toolbar>
            <IconButton edge='end' className={classes.menuButton}>
              <MenuIcon
                color='secondary'
                ref={menuRef}
                onClick={() => setOpenMenu(true)}
              ></MenuIcon>
            </IconButton>
            {openMenu && (
              <Menu anchorEl={menuRef.current} toggleOpen={setOpenMenu} />
            )}
            <Typography variant='h6' className={classes.title}>
              Task Tracker
            </Typography>
            {props.isLoggedIn ? (
              <Box className={classes.userBox}>
                <Box className={classes.userInfo}>
                  <Avatar className={classes.avatar}>
                    {props.position[0]}
                  </Avatar>
                  <span className={classes.userName}>{props.userName}</span>
                </Box>
                <Button
                  className={classes.menuButton}
                  variant='outlined'
                  color='inherit'
                  size='small'
                  onClick={async (e) => {
                    e.preventDefault();
                    props.logout();
                  }}
                >
                  Log Out
                </Button>
              </Box>
            ) : (
              <>
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
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
