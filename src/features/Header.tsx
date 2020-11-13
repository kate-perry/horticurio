import React from "react";
import "../shared/styles/styles.scss";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import headerlogo from "../shared/static/header-logo-clay.svg";
import history from "../shared/utils/history";

function Header() {
  return (
    <>
      <Grid container spacing={0} justify="center">
      <Grid item xs={12} className="header--bar"/>
        <Grid item xs={12} className="header--bar">
          <ButtonGroup variant="text">
            <Button onClick={() => history.push("/about")}>About</Button>
            <Button onClick={() => history.push("/browse")}>Browse</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} className="header--bar"> </Grid>
        <Grid item xs={12}>
          <img
            src={headerlogo}
            className="header-logo"
            alt="logo"
            onClick={() => history.push("/")}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Header;

{
  /* <Grid item xs={4}>
          <Button component={Link} to="/about">
            About
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to="/about">
            Browse
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button component={Link} to="/about">
            About (again)
          </Button>
        </Grid> */
}
