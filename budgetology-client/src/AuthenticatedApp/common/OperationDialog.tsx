import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles
} from "@material-ui/core";

import { BankAccountForm } from "AuthenticatedApp/common/operationForm/BankAccountForm";
import { MoneyFlowForm } from "AuthenticatedApp/common/operationForm/MoneyFlowForm";
import React from "react";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black
  },
  dialogWidth: {
    width: "20%"
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

interface OperationDialogProps {
  handleClose: () => void;
  open: boolean;
  text: string;
}
const modes = { cash: "cash", bankaccount: "bankaccount" };
export const OperationDialog = ({
  handleClose,
  open,
  text
}: OperationDialogProps) => {
  const [mode, setMode] = React.useState(modes.cash);
  const classes = useStyles();
  const formId =
    text === "Add account"
      ? "bank-account-form"
      : mode === modes.cash
      ? "cash-form"
      : "add-income-form";
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
      <DialogContent className={classes.dialogContent}>
        {text === "Add account" ? (
          <BankAccountForm handleClose={handleClose} />
        ) : (
          <MoneyFlowForm
            text={text}
            handleClose={handleClose}
            mode={mode}
            setMode={setMode}
          />
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
