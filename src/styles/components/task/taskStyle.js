const TaskItemStyle = (theme) => {
  return {
    TaskLIstContainer: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
    },
    tableContainer: {
      width: "100%",
    },
    noTasks: {
      color: theme.palette.primary.main,
    },
    status: {
      textAlign: "center",
      fontSize: "10px",
      backgroundColor: theme.palette.secondary.main,
      width: "100px",
      color: theme.palette.secondary.contrastText,
      fontWeight: "600",
      padding: "6px",
      borderRadius: "4px",
    },
    head: {
      backgroundColor: theme.palette.primary.light,
    },
    headTitle: {
      color: "#fff",
      alignSelf: "center",
      fontWeight: "700",
    },
    headGroup: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
    taskControl: {
      display: "flex",
    },
    taskTitle: {
      color: theme.palette.secondary.dark,
      fontWeight: "800",
      marginRight: "20px",
    },
    taskTitleCell: {
      backgroundColor: "#fff",
    },
    textField: {
      width: "100%",
    },
    filterContainer: {
      display: "flex",
      justifyContent: "flex-end",
      padding: "15px",
    },
    paperNew: {
      flexGrow: 1,
    },
    developer: {
      color: "rgba(61, 61, 59,0.7)",
    },
    taskContent: {
      color: "rgba(61, 61, 59,0.9)",
    },
    filterBtn: {},
  };
};

export default TaskItemStyle;
