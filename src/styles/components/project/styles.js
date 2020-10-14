const ProjectsStyles = (theme) => {
  return {
    listItem: {
      width: "100%",
      borderBottom: `5px dashed ${theme.palette.primary.main}`,
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      padding: "10px",
      listStyleType: "none",
      marginBottom: "20px",
    },

    textFieldContainer: {
      width: "inherit",
    },
    textField: {
      width: "100%",
    },
    devList: {
      color: "rgba(61, 61, 59,0.7)",
    },
    devBox: {
      display: "flex",
      marginTop: "15px",
    },
    devIcon: {
      color: theme.palette.primary.light,
    },
    titleIntro: {
      fontWeight: "600",
      fontSize: "20px",
      color: theme.palette.secondary.dark,
    },
    button: {
      height: "50%",
      alignSelf: "center",
      color: theme.palette.secondary.dark,
      fontWeight: "800",
    },
    icon: {
      color: theme.palette.secondary.contrastText,
    },
    fabIcon: {
      backgroundColor: theme.palette.secondary.dark,
    },
    AddContainer: {
      margin: "40px auto",
      display: "flex",
      justifyContent: "center",
    },
    ProjectContainer: {
      height: "100vh",
      marginTop: "100px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
    },
    ProjectBox: {
      marginTop: "70px",
      marginBottom: "50px",
    },
    buttonBlock: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "20px",

      overflowX: "hidden",
    },
    buttonText: {
      alignSelf: "center",
      marginRight: "10px",
    },
    addButton: {
      marginTop: "20px",
      width: "50%",
      alignSelf: "center",
    },
    addProjectBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "spaceBetween",
      alignSelf: "center",
      textAlign: "center",
      width: "50%",
    },
    textBox: {
      textAlign: "left",

      color: theme.palette.primary.dark,
      fontWeight: "400",
    },
    titleBox: {
      color: theme.palette.primary.light,
      textAlign: "left",
    },
  };
};

export default ProjectsStyles;
