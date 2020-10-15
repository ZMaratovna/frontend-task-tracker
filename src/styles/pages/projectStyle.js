const ProjectsStyles = (theme) => {
  return {
    pageContainer: {
      height: "100vh",
      marginTop: "100px",
      display: "flex",
      flexDirection: "column",
    },
    root: {
      width: "100%",
      color: theme.palette.secondary.contrastText,
    },
    paperList: {},
    listWrapper: {
      width: "100%",
      alignSelf: "center",
      textAlign: "left",
    },
    paperNew: {
      flexGrow: 1,
    },
    button: {
      height: "50%",
      alignSelf: "center",
    },
    noProjects: {
      color: theme.palette.secondary.dark,
      padding: "50px",
      borderBottom: `3px dashed ${theme.palette.primary.main}`,
      fontSize: "2rem",
    },
  };
};

export default ProjectsStyles;
