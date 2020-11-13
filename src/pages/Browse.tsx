import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface IProps {}

interface IState {}

class Browse extends Component<IProps, IState> {
  render() {
    return (
      <>
        <Typography>Welcome to Browse!</Typography>
        <Button color="secondary">hello</Button>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm a link!
        </a>
      </>
    );
  }
}

export default Browse;
