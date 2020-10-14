const menuStyles = (theme) => {
  return {
    menuItem: {
      textDecoration: "none",
      color: theme.palette.primary.dark,
      fontSize: "1.5rem",
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
      backgroundColor: theme.palette.secondary.main,
      width: "200px",
      height: "300px",
      borderRadius: "5px",
    },
    popper: {
      transform: "translate(50%, 0)",
    },
  };
};
export default menuStyles;
