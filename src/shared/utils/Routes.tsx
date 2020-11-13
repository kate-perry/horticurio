import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import About from "../../pages/About";
import Browse from "../../pages/Browse";
import history from "./history";

interface IProps {}

interface IState {}

class Routes extends Component<IProps, IState> {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;