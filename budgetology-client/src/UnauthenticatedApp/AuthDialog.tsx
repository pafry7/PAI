import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  makeStyles
} from "@material-ui/core";

import React from "react";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black
  }
}));
interface AuthDialogProps {
  handleClose: () => void;
  open: boolean;
  text: string;
}

export const AuthDialog = ({ handleClose, open, text }: AuthDialogProps) => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
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
          <TextField
            autoFocus
            margin="dense"
            InputProps={{ classes: { root: classes.dialogText } }}
            id="email-field"
            required
            variant="outlined"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            required
            variant="outlined"
            margin="dense"
            id="password-field"
            InputProps={{ classes: { root: classes.dialogText } }}
            type="password"
            label="Password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained" color="primary">
            {text}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
