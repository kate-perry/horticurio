import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: { main: '#36494e', }, //gray
        secondary: { main: '#7a9a68', }, //green
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: [
          'Lato',
        ].join(','),
      },
});