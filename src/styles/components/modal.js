import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";
import pink from "@material-ui/core/colors/pink";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

const modalStyle = {
  modal: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "6px",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "500px",
    height: "350px",
    backGroundColor: "#ffff",
    padding: "30px",
  },
  button: {
    width: "150px",
    height: "50px",
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-around",
  },
  typography: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
};

export default modalStyle;
