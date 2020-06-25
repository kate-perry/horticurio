import React from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme.js';

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <div className="app" >
        <header className="header">
          <h1 className="title">horticurio</h1>
          <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
            <Button>About</Button>
            <Button>Shop</Button>
            <Button>Gallery</Button>
          </ButtonGroup>
          <div className="body-plate">
            <body className="body">
              <p>
                Welcome!
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
            </body>
          </div>
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
