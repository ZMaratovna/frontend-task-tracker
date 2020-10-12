import React, { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Link from "@material-ui/core/Link";

const Menu = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    props.toggleOpen(false);
  };
  return (
    <Popper open={open} anchorEl={props.anchorEl} transition disablePortal>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          id='menu-list-grow'
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList>
                <MenuItem>
                  <Link href='/'>About</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/myTasks'>My Tasks</Link>
                </MenuItem>
                <MenuItem>
                  <Link href='/contacts'>Contacts</Link>
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
