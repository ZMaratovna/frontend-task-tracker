import theme from "../../../styles/utils/theme";
const AuthStyles = {
  root: {
    width: "400px",
  },

  field: {
    marginBottom: "10px",
    height: "70px",
    textAlign: "center",
  },
  formWrapper: {
    zIndex: "1000",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "50px 20px",
    width: "400px",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "10px",
    boxShadow: `1px 1px 2px ${theme.palette.primary.main}`,
    backgroundColor: "rgba(255,255,255,0.9)",
  },
  label: {
    color: "rgba(100, 100, 100, 1)",
  },
  form: {
    width: "70%",
  },
  comment: {
    fontSize: "12px",
    color: "rgb(52,53,64)",
    marginTop: "10px",
  },
  commentLink: {
    padding: " 0px  10px",
    color: "#3f51b5",
  },
  button: {
    marginTop: "20px",
  },
  error: {
    fontSize: "12px",
    color: "#f50057",
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: "20px",
  },
};

export default AuthStyles;
