import React, { Component } from "react";
import "../shared/styles/styles.scss";
import Routes from "../shared/utils/Routes";
import Header from "../features/Header";

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="body-plate">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
