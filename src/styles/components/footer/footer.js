const footerStyle = (theme) => {
  return {
    text: {
      fontSize: "0.8rem",
      color: theme.palette.primary.dark,
    },
    footer: {
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "30px",
      paddingBottom: "30px",
      marginTop: "auto",
      backgroundColor: theme.palette.primary.main,
    },
  };
};

export default footerStyle;
