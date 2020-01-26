import { TextField, makeStyles } from "@material-ui/core";

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
    flexDirection: "column",
    width: "100%"
  },
  formWidth: {
    width: "90%"
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
  const handleChange = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setValue(old => ({ ...old, [name]: value }));
  };
  return (
    <form
      id="bank-account-form"
      className={classes.formWidth}
      onSubmit={(e: any) => handleSubmit(e)}
    >
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
          fullWidth
          value={value.bankName}
          onChange={(e: any) => handleChange(e)}
        />
        <InputLabel id="moneyAmount">Amount of money</InputLabel>
        <TextField
          color="primary"
          id="amount-field"
          fullWidth
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
