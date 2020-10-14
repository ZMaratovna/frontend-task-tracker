const HeaderStyle = (theme) => {
  return {
    root: { flexGrow: 1, maxWidth: "1238px" },

    menuButton: {
      margin: "8px",
      height: "50%",
      alignSelf: "center",
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
        color: theme.palette.secondary.dark,
      },
    },
    menuIcon: {
      color: theme.palette.secondary.main,
    },
    primaryBtn: {
      color: theme.palette.primary.contrastText,
      border: `1px solid ${theme.palette.primary.contrastText}`,
      margin: "8px",
      height: "50%",
      alignSelf: "center",
    },
    secondaryBtn: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
    },
    logoutBtn: {
      color: theme.palette.secondary.contrastText,
      height: "50%",
      alignSelf: "center",
    },
    title: {
      fontFamily: "'Montserrat', sans-serif",
      flexGrow: 1,
      color: theme.palette.secondary.dark,
      fontWight: "900",
    },
    avatar: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.contrastText,
      alignSelf: "center",
      justifySelf: "center",
    },
    userBox: {
      display: "flex",
    },
    userInfo: {
      display: "flex",
      flexDirection: "column",
      padding: "10px",
    },
    userName: {
      color: theme.palette.primary.dark,
      fontSize: "14px",
      textAlign: "center",
      padding: "5px",
    },
  };
};

export default HeaderStyle;
