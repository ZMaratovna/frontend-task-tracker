import Image from "../../img/good_team.svg";
const SplashPageStyle = {
  paperContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
  },
  titleContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "100%",
  },
  title: {
    textAlign: "center",
    padding: "20px",
  },
};
export default SplashPageStyle;
