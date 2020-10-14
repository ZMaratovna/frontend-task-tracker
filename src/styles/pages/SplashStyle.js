import Image from "../../img/dev.svg";
//import theme from "../../styles/utils/theme";

const SplashPageStyle = (theme) => {
  return {
    paperContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      flexGrow: 1,
      minHeight: "100vh",
      backgroundColor: "transparent",

      color: "#fff",
      fontWeight: "600",
      position: "relative",
    },
    startPage: {
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundColor: "transparent",
      backgroundSize: "70%",
      backgroundPosition: "bottom  right",
      backgroundRepeat: "no-repeat",
    },
    mainTitle: {
      color: theme.palette.secondary.dark,
      marginLeft: "20px",
      marginTop: "25%",
      width: "50%",
    },
    wave: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      height: "30%",
      background: theme.palette.primary.light,
      zIndex: "-1",
      transform: "skewY(15deg)",
      transformOrigin: "top right",
    },
    info: {
      width: "100%",
      zIndex: 1,
    },

    devContainer: {
      right: "10px",
      backgroundColor: "#ffff",
      textAlign: "center",
      color: theme.palette.primary.dark,
    },
    manContainer: {
      backgroundColor: "#ffff",
      paddingBottom: "40px",
      textAlign: "center",
      color: theme.palette.primary.dark,
      marginBottom: "50px",
    },
    sliderBox: {
      //marginBottom: "60px",
      paddingBottom: "60px",
      background: theme.palette.primary.main,
    },
    ListItem: {
      alignItems: "flex-start",
      color: theme.palette.primary.dark,
    },
    titleContainer: {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      width: "100%",
    },
    title: {
      color: theme.palette.primary.dark,
      textAlign: "center",
      padding: "20px",
    },

    ListIcon: {
      color: theme.palette.primary.dark,
      marginRight: "15px",
    },
  };
};
export default SplashPageStyle;
