import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import HoyaImageSrc from "../shared/static/hoya.jpg";

interface IProps {}

interface IState {}

class Browse extends Component<IProps, IState> {
  render() {
    return (
      <>
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={5}>
            <img
              src={HoyaImageSrc}
              className="top-left-shadow"
              alt="hoya plant"
            />
          </Grid>
          <Grid item xs={5}>
            <img
              src={HoyaImageSrc}
              className="bottom-right-shadow"
              alt="hoya plant"
            />
          </Grid>
        </Grid>
        <div className="space--xl" />
        <div className="body-plate">
          <Typography variant="h1">Some dramatic text...</Typography>
        </div>
        <div className="space--xl" />
        <Grid
          container
          direction="row"
          spacing={3}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={5}>
            <img
              src={HoyaImageSrc}
              className="thin-loose-shadow"
              alt="hoya plant"
            />
          </Grid>
          <Grid item xs={5} />
          <Grid item xs={12} />
          <Grid item xs={5} />
          <Grid item xs={5}>
            <img
              src={HoyaImageSrc}
              className="thick-tight-shadow"
              alt="hoya plant"
            />
          </Grid>
          <div className="space--xl" />
        </Grid>
      </>
    );
  }
}

export default Browse;
