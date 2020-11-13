import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: { main: 'rgb(223, 126, 96)' }, //clay
    secondary: { main: 'rgb(108, 100, 132)' }, //blue
    contrastThreshold: 3,
    tonalOffset: 0.2,
    background: {
      default: 'rgb(108, 100, 132)'
    },
  },
  typography: {
    fontFamily: ["Lato"].join(","),
    button: {
      textTransform: "none",
    },
  },
});
