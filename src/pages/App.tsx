import React from 'react';
import '../shared/styles/styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { MuiThemeProvider } from "@material-ui/core/styles";
import MuiTheme from '../shared/styles/MuiTheme.js';
import Browse from './Browse';
import About from './About';
import headerlogo from '../shared/static/headerlogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MuiThemeProvider theme={MuiTheme}>
        <div className="app" >
          <header className="header">
            <div className="header-container" >
            <img src={headerlogo} className="header-logo--white" alt="logo"/>
            </div>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
              <Button component={Link} to="/about">About</Button>
              <Button component={Link} to="/browse">Browse</Button>
            </ButtonGroup>
            <div className="body-plate">
              <body className="body">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/browse">
                    <Browse />
                  </Route>
                  <Route path="/">
                    <About />
                  </Route>
                </Switch>
              </body>
            </div>
          </header>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;