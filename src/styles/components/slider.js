import theme from "../utils/theme";
import Image_1 from "../../img/plan.svg";
import Image_2 from "../../img/idea.svg";
import Image_3 from "../../img/analyse.svg";
import Image_4 from "../../img/support.svg";
import Image_5 from "../../img/newsletter.png";
import Image_6 from "../../img/time_managment.svg";
const SliderStyle = {
  info: {
    backgroundColor: "#fff",
    opacity: 1,
  },
  sliderText: {
    width: "50%",
    fontFanily: "'Montserrat', sans-serif",
  },
  sliderItem_1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "80px",
    backgroundColor: theme.palette.secondary.dark,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_1})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    width: "100%",
    height: "inherit",
  },
  sliderItem_2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: "80px",
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_2})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",
    color: theme.palette.primary.contrastText,
    height: "inherit",
  },
  sliderItem_3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "inherit",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    color: theme.palette.primary.contrastText,
    paddingLeft: "80px",
  },
  sliderItem_4: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "inherit",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_4})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    color: theme.palette.primary.contrastText,
    paddingLeft: "80px",
  },
  sliderItem_5: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "inherit",
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_5})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    color: theme.palette.primary.contrastText,
    paddingLeft: "80px",
  },
  sliderItem_6: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "inherit",
    width: "100%",
    backgroundColor: theme.palette.secondary.dark,
    backgroundSize: "50%",
    backgroundImage: `url(${Image_6})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
    color: theme.palette.primary.contrastText,
    paddingLeft: "80px",
  },
};

export default SliderStyle;