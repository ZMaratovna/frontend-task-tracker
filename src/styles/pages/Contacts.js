import Image from "../../img/newsletter.png";
const contactsStyles = (theme) => {
  return {
    Paper: {
      display: "flex",
      flexGrow: 1,
      maxHeight: "100vh",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      position: "relative",
      backgroundColor: "transparent",
    },
    contactsBox: {
      position: "relative",

      width: "400px",
      height: "400px",
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      transform: "rotate(7deg)",
      backgroundImage: `url(${Image})`,

      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      "$:hover": {
        boxShadow: `2px 2px 10px ${theme.palette.primary.main}`,
      },
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

    iconBox: {
      marginTop: "50px",
    },
    icon: {
      color: theme.palette.primary.light,
      fontSize: "50px",
      width: "100px",
      "&:hover": {
        color: theme.palette.secondary.dark,
        transition: "all 0.5s ease-in-out",
        fontSize: "40px",
      },
    },
    char: {
      textAlign: "center",
      fontSize: "3.5rem",
      color: theme.palette.primary.light,
      height: "200px",
      position: "absolute",
      width: "53px",
      height: "300px",
      left: "173px",
      top: "-20%",
      transformOrigin: "bottom center",
    },

    char1: { transform: "rotate(-60deg)" },
    char2: { transform: "rotate(-45deg)" },
    char3: { transform: "rotate(-30deg)" },
    char4: { transform: "rotate(-15deg)" },
    char5: { transform: "rotate(0deg)" },
    char6: { transform: "rotate(15deg)" },
    char7: { transform: "rotate(30deg)" },
    char8: { transform: "rotate(45deg)" },
  };
};

export default contactsStyles;
