import theme from "../../../styles/utils/theme";
const RegisterStyles = {
  field: {
    marginBottom: "10px",
    height: "70px",
    textAlign: "center",
  },
  formWrapper: {
    zIndex: "1000",
    display: "flex",
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
  FormControl: {
    marginTop: "30px",
    marginBottom: "20px",
  },
  form: {
    width: "70%",
  },
  submitMessage: {
    fontSize: "20px",
    color: theme.palette.primary.main,
    fontWeight: "600",
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    marginTop: "20px",
  },
};

export default RegisterStyles;
