import Image from "../../img/good_team.svg";
const SplashPageStyle = {
  paperContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    color: "#fff",
    fontWeight: "600",
  },
  manContainer: {
    backgroundColor: "#f50057",
    alignSelf: "flex-start",
    marginTop: "150px",
    borderRadius: "6px",
    paddingBottom: "40px",
  },
  devContainer: {
    backgroundColor: "#3f51b5",
    alignSelf: "flex-end",
    marginBottom: "100px",
    paddingBottom: "40px",
    borderRadius: "6px",
  },
  ListItem: {
    alignItems: "flex-start",
  },
  titleContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "100%",
  },
  title: {
    textAlign: "center",
    padding: "20px",
  },
  emoji: {
    fontSize: "50px",
  },
  ListIcon: {
    color: "#fff",
    marginRight: "15px",
  },
};
export default SplashPageStyle;
