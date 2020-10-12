import Image from "../../img/good_team.svg";
const contactsStyles = {
  Paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Image})`,
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    flexGrow: 1,
    height: "100vh",
  },
  contactsBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f51b5",
    height: "30vh",
    width: "100%",
  },
  contactsText: {
    color: "#ffff",
  },
};

export default contactsStyles;
