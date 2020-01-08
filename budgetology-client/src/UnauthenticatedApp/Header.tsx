import { Link, makeStyles } from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: theme.spacing(4),
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    fontSize: "1.5vw",
    lineHeight: "0.9em",
    fontWeight: theme.typography.fontWeightBold
  },
  nav: {
    display: "flex",
    width: "140px",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1vw"
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Budgetology</div>
      <div className={classes.nav}>
        <Link color="textPrimary" href="#">
          Login
        </Link>
        <Link href="#">Sign up</Link>
      </div>
    </div>
  );
};
