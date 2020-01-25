import { Button, TextField, makeStyles } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import React from "react";
import { useAddBankAccountMutation } from "generated/apolloComponents";
import { useAuth } from "common/AuthContent";

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
  }
}));

interface FormProps {
  handleClose: () => void;
}

export const BankAccountForm: React.FC<FormProps> = ({ handleClose }) => {
  const { user }: any = useAuth();
  const [value, setValue] = React.useState({ moneyAmount: "", bankName: "" });
  const [addBankAccountMutation] = useAddBankAccountMutation();
  const classes = useStyles();

  const handleChange = (e: any) => {
    const target = e.target;
    if (target.name === "bankName")
      setValue(old => ({ ...old, bankName: target.value }));
    else {
      setValue(old => ({ ...old, moneyAmount: target.value }));
    }
  };
  console.log(value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await addBankAccountMutation({
      variables: {
        id: user,
        data: {
          bankName: value.bankName,
          moneyAmount: parseFloat(value.moneyAmount)
        }
      }
    });
    console.log(response);
    handleClose();
  };

  return (
    <form id="bank-account-form" onSubmit={(e: any) => handleSubmit(e)}>
      <div className={classes.div}>
        <InputLabel id="bank">Bank name</InputLabel>
        <TextField
          color="primary"
          id="bankName-field"
          className={classes.dialogText}
          InputProps={{
            classes: { root: classes.dialogText }
          }}
          name="bankName"
          value={value.bankName}
          onChange={(e: any) => handleChange(e)}
        />

        <InputLabel id="moneyAmount">Amount of money</InputLabel>
        <TextField
          color="primary"
          id="amount-field"
          className={classes.dialogText}
          InputProps={{
            inputProps: { min: 0 },
            classes: { root: classes.dialogText }
          }}
          name="moneyAmount"
          type="number"
          value={value.moneyAmount}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </form>
  );
};
