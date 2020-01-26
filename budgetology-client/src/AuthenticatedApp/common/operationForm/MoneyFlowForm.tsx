import { Button, Select, TextField, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

import { BankMoneyFlow } from "AuthenticatedApp/common/operationForm/BankMoneyFlow";
import { CashFlowForm } from "./CashFlowForm";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { useAuth } from "common/AuthContent";
import { useBankAccountsQuery } from "generated/apolloComponents";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black,
    marginBottom: theme.spacing(2)
  },
  dialogWidth: {
    width: "20%"
  },
  div: {
    display: "flex",
    flexDirection: "column"
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: theme.spacing(2),
    width: "75%"
  },
  buttonNotPressed: {
    opacity: 0.7
  }
}));

const modes = { cash: "cash", bankAccount: "bankaccount" };

interface MoneyFlowFormProps {
  text: string;
  handleClose: () => void;
  mode: string;
  setMode: (mode: string) => void;
}

export const MoneyFlowForm = ({
  text,
  handleClose,
  mode,
  setMode
}: MoneyFlowFormProps) => {
  // const [mode, setMode] = useState(modes.cash);
  const classes = useStyles();
  return (
    <>
      <div className={classes.buttonsContainer}>
        <Button
          variant="contained"
          type="submit"
          color={mode === modes.cash ? "primary" : "secondary"}
          className={
            mode === modes.bankAccount ? classes.buttonNotPressed : undefined
          }
          onClick={() => setMode(modes.cash)}
        >
          Cash
        </Button>
        <Button
          variant="contained"
          type="submit"
          color={mode === modes.bankAccount ? "primary" : "secondary"}
          className={mode === modes.cash ? classes.buttonNotPressed : undefined}
          onClick={() => setMode(modes.bankAccount)}
        >
          Bank account
        </Button>
      </div>
      {mode === modes.cash ? (
        <CashFlowForm text={text} handleClose={handleClose} />
      ) : (
        <BankMoneyFlow text={text} handleClose={handleClose} />
      )}
    </>
  );
};
