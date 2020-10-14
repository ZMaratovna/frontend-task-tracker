const addTaskStyle = (theme) => {
  return {
    addContainer: {
      margin: "30px auto",
      display: "flex",
      justifyContent: "center",
    },
    buttonBlock: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    buttonText: {
      alignSelf: "center",
      marginRight: "10px",
    },
    addTaskBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignSelf: "center",
      width: "50%",
      padding: "40px",
      borderRadius: "6px",
      boxShadow: `1px 1px  1px 1px  0.5px ${theme.palette.primary.light}`,
    },
    addButton: {
      width: "50%",
      marginTop: "20px",
      alignSelf: "center",
    },
    devGroup: {
      display: "flex",
      textAlign: "center",
      flexDirection: "column",
    },
  };
};

export default addTaskStyle;
