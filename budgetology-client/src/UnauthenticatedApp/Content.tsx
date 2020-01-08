import { Button, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import image from "UnauthenticatedApp/image.svg";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "8rem",
    alignItems: "center"
  },
  header: {
    marginBottom: "1rem",
    fontWeight: theme.typography.fontWeightBold
  },
  info: { width: "40%" },
  button: { marginTop: "3.5rem", height: "50px", width: "150px" },
  image: { width: "80%", height: "auto", maxWidth: "550px" }
}));
//typography da sie lepiej ogarnac zmieniajac theme
export const Content = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <Typography variant="h2" className={classes.header}>
          Manage your finances
        </Typography>
        <Typography variant="h5" color="textSecondary">
          Use our app to organize your finances. Be aware how much you spend
          everyday and control your account balance
        </Typography>
        <Button
          className={classes.button}
          size="large"
          variant="contained"
          color="primary"
        >
          Get started
        </Button>
      </div>
      <img src={image}></img>
    </div>
  );
};
