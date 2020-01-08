import { Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { AuthDialog } from "UnauthenticatedApp/AuthDialog";

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
  const [dialogText, setDialogText] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = (text: string) => {
    setDialogText(text);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div aria-label="Header" className={classes.header}>
        <div aria-label="Logo name" className={classes.logo}>
          Budgetology
        </div>
        <div aria-label="Login and Signup buttons" className={classes.nav}>
          <Button onClick={() => handleOpen("Login")}>Login </Button>
          <Button color="primary" onClick={() => handleOpen("Sign up")}>
            Sign up
          </Button>
        </div>
      </div>
      <AuthDialog handleClose={handleClose} open={open} text={dialogText} />
    </>
  );
};
