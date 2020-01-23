import { Link, RouteComponentProps } from "@reach/router";

import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  button: {
    marginTop: "3.5rem",
    height: "50px",
    width: "150px"
  }
}));

export const NotFound: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  return (
    <>
      <h1> Oops something went wrong.</h1>
      <Link to="/summary">
        <Button
          className={classes.button}
          size="large"
          variant="contained"
          color="primary"
        >
          Go Home
        </Button>
      </Link>
    </>
  );
};
