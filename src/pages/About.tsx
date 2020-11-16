import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

interface IProps {}

interface IState {}

class About extends Component<IProps, IState> {
  render() {
    return (
      <>
        <div className="section1">
          <Grid container spacing={0}>
            <Grid item xs={12}>
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
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default About;
