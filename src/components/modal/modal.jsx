import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import styles from "../../styles/components/modal";

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
    <Popover
      id={id}
      open={open}
      anchorEl={props.anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      disableBackdropClick={true}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box className={classes.modalContainer}>
        <Typography variant='h5' className={classes.typography}>
          Are you sure you want to delete that item?
        </Typography>
        <Box className={classes.btnBox}>
          <Button
            className={classes.button}
            variant='contained'
            color='primary'
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            onClick={() => props.delete(props.id)}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Popover>
  );
};

export default Modal;
