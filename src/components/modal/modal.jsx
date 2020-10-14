import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import styles from "../../styles/components/modal";
import theme from "../../styles/utils/theme";

import Dialog from "@material-ui/core/Dialog";

const Modal = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(props.anchorEl);

  const useStyles = makeStyles(styles);

  const handleClose = () => {
    setAnchorEl(null);
    props.isOpen(false);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Dialog
        className={classes.modal}
        id={id}
        open={open}
        anchorEl={props.anchorEl}
        onClose={handleClose}
        disableBackdropClick={true}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box className={classes.modalContent}>
          <Typography variant='h5' className={classes.typography}>
            Are you sure you want to delete that item?
          </Typography>
          <Box className={classes.btnBox}>
            <Button
              className={classes.closeButton}
              variant='contained'
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant='contained'
              className={classes.button}
              onClick={() => {
                handleClose();
                props.delete(props.id);
              }}
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default Modal;
