import React from "react";
import "../shared/styles/styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import headerlogo from "../shared/static/header-logo-clay.svg";
import history from "../shared/utils/history";

function Header() {
  return (
    <>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12}>
          <img
            src={headerlogo}
            className="header-logo"
            alt="logo"
            onClick={() => history.push("/")}
          />
        </Grid>
        <Grid item xs={12} className="header--bar">
          <Grid container direction="row" spacing={5} alignItems="center" justify="center">
            <Button onClick={() => history.push("/about")}>About</Button>
            <Button onClick={() => history.push("/browse")}>Browse</Button>
          </Grid>
        </Grid>
        <Grid item xs={12} />
      </Grid>
    </>
  );
}

export default Header;