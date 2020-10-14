import theme from "../utils/theme";

const modalStyle = {
  modal: {
    transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    borderRadius: "50px 20px",
  },
  modalContent: {
    fontFamily: theme.typography.fontFamily,
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
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  closeButton: {
    width: "150px",
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
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
