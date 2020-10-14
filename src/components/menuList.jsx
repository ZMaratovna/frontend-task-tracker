import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Link from "@material-ui/core/Link";
import { makeStyles, Typography } from "@material-ui/core";
import styles from "../styles/components/menu";
const Menu = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.toggleOpen(false);
  };

  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Popper
      open={open}
      anchorEl={props.anchorEl}
      transition
      disablePortal
      className={classes.popper}
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps} id='menu-list-grow'>
          <Paper className={classes.paper}>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList className={classes.menu}>
                <MenuItem>
                  <Link underline='none' className={classes.menuItem} href='/'>
                    About
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    underline='none'
                    className={classes.menuItem}
                    href='/projects'
                  >
                    Projects
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    underline='none'
                    className={classes.menuItem}
                    href='/contacts'
                  >
                    Contacts
                  </Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default Menu;
