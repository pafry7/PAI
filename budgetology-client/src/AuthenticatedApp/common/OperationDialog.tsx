import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from "@material-ui/core";

import { BankAccountForm } from "AuthenticatedApp/common/operationForm/BankAccountForm";
import { IncomeForm } from "AuthenticatedApp/common/operationForm/IncomeForm";
import React from "react";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black
  },
  dialogWidth: {
    width: "20%"
  }
}));

interface OperationDialogProps {
  handleClose: () => void;
  open: boolean;
  text: string;
}

export const OperationDialog = ({
  handleClose,
  open,
  text
}: OperationDialogProps) => {
  const classes = useStyles();
  const formId = "bank-account-form";
  const handleSubmit = () => {
    document
      .getElementById(formId)!
      .dispatchEvent(new Event("submit", { cancelable: true }));
  };
  return (
    <Dialog
      PaperProps={{ classes: { root: classes.dialogWidth } }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className={classes.dialogText}>{text}</DialogTitle>
      <DialogContent>
        {text === "Add account" ? (
          <BankAccountForm handleClose={handleClose} />
        ) : (
          <IncomeForm />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          onClick={handleSubmit}
        >
          {text}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
