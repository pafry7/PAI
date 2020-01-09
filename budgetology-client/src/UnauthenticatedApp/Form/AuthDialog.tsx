import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from "@material-ui/core";

import { AuthForm } from "UnauthenticatedApp/Form/AuthForm";
import React from "react";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black
  },
  dialogWidth: {
    width: "20%"
  }
}));
interface AuthDialogProps {
  handleClose: () => void;
  open: boolean;
  text: string;
}

export const AuthDialog = ({ handleClose, open, text }: AuthDialogProps) => {
  const classes = useStyles();

  const formId = "auth-form";
  const handleSubmit = () => {
    document
      .getElementById(formId)!
      .dispatchEvent(new Event("submit", { cancelable: true }));
  };

  return (
    <div>
      <Dialog
        PaperProps={{ classes: { root: classes.dialogWidth } }}
        open={open}
        onClose={handleClose}
        aria-labelledby={`form-dialog-title-${text}`}
      >
        <DialogTitle
          id={`form-dialog-title-${text}`}
          className={classes.dialogText}
        >
          {text}
        </DialogTitle>
        <DialogContent>
          <AuthForm text={text} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            type="submit"
            color="primary"
          >
            {text}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
