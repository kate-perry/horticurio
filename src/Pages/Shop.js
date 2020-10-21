import React from 'react';
import '../styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from '../MuiTheme.js';

function Shop() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
              <p>
                Welcome to the Shop!
              </p>
              <Button target="_blank"
                rel="noopener noreferrer" color="secondary">hello</Button>
              <a
                className="link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                I'm a link!
        </a>
      </div>
    </MuiThemeProvider>
  );
}

export default Shop;