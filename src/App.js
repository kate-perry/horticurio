import React from 'react';
import './styles.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import MuiTheme from './MuiTheme.js';
import Browse from './Browse.js';
import Shop from './Shop.js';
import About from './About.js';
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
            <h1 className="title">horticurio</h1>
            <ButtonGroup size="large" variant="text" color="primary" aria-label="text primary button group">
              <Button component={Link} to="/browse">Browse</Button>
              <Button component={Link} to="/shop">Shop</Button>
              <Button component={Link} to="/about">About</Button>
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
                  <Route path="/shop">
                    <Shop />
                  </Route>
                  <Route path="/">
                    <Browse />
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
