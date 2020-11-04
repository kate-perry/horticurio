import React from 'react';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from '../shared/styles/MuiTheme.js';

function Browse() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
              <p>
                Welcome to Browse!
              </p>
              <Button color="secondary">hello</Button>
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

export default Browse;