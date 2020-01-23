import { Button, Typography, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { AuthDialog } from "UnauthenticatedApp/Form/AuthDialog";
import { LoginComponent } from "generated/apolloComponents";
import image from "UnauthenticatedApp/image.svg";
import { useAuth } from "common/AuthContent";

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
  image: { width: "80%", height: "auto", maxWidth: "850px" }
}));
//typography da sie lepiej ogarnac zmieniajac theme
export const Content = () => {
  const testAUth: any = useAuth();
  const classes = useStyles();
  const [dialogText, setDialogText] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setDialogText("Sign up");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
          onClick={handleOpen}
        >
          Get started
        </Button>
      </div>
      <img
        className={classes.image}
        src={image}
        alt="Man sitting next to a piggybank"
      ></img>
      <AuthDialog handleClose={handleClose} open={open} text={dialogText} />
      <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: {
                  input: { email: "xD@xD.pl", password: "xD@xD.pl" }
                }
              });

              // console.log(response);
              if (
                response &&
                response.data &&
                response.data.login &&
                response.data.login.user &&
                response.data.login.user.id
              ) {
                testAUth.login();
              }
            }}
          >
            call login mutation
          </button>
        )}
      </LoginComponent>
    </div>
  );
};
