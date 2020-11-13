import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface IProps {}

interface IState {}

class About extends Component<IProps, IState> {
  render() {
    return (
      <>
        <Typography>Welcome to About!</Typography>
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

export default About;
