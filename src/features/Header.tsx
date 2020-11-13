import React from "react";
import "../shared/styles/styles.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import headerlogo from "../shared/static/header-logo-clay.svg";
import history from "../shared/utils/history";

function Header() {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Button onClick={() => history.push("/about")}>About</Button>
          <Button onClick={() => history.push("/browse")}>Browse</Button>
        </Grid>
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
