import Image from "../../img/analyse.svg";
import theme from "../utils/theme";
const formsPagesStyle = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "flex-start",
    flexDirection: "column",
    flexGrow: 1,
    minHeight: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundColor: "transparent",
    backgroundSize: "60%",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    color: "#fff",
    fontWeight: "600",
    position: "relative",
  },
  form: {},
  wave: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: "100%",
    height: "40%",
    background: theme.palette.primary.dark,
    zIndex: "-1",
    transform: "skewY(10deg)",
    transformOrigin: "top right",
  },
};

export default formsPagesStyle;
