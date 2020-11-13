import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: { main: 'rgb(223, 126, 96)' }, //clay
    secondary: { main: 'rgb(45, 103, 100)' }, //green
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
