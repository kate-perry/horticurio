import React from 'react';
import '../styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from '../MuiTheme.js';
//import Calendar from "react-material-ui-calendar";

function Track() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
              <p>
                Welcome to the Tracker!
              </p>
      </div>
    </MuiThemeProvider>
  );
}

export default Track;