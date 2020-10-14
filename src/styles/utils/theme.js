import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import yellow from "@material-ui/core/colors/yellow";
import MontserratWoff from "./fonts/Montserrat-Regular.woff";
import MontserratEot from "./fonts/Montserrat-Regular.eot";
import MontserratOtf from "./fonts/Montserrat-Regular.otf";
import MontserratTtf from "./fonts/Montserrat-Regular.ttf";

const montserrat = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${MontserratWoff}) format('woff')
    url(${MontserratEot}) format('eot')
    url(${MontserratOtf}) format('otf')
    url(${MontserratTtf}) format('ttf')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue[500],
      main: blue[200],
      dark: blue[900],
      contrastText: "#fff",
    },
    secondary: {
      light: yellow[300],
      main: yellow[600],
      dark: yellow[800],
      contrastText: blue[900],
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [montserrat],
      },
    },
  },
  spacing: [0, 4, 8, 16, 32, 64],
});

export default theme;
