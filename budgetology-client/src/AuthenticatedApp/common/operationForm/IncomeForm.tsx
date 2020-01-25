import { Select, TextField, makeStyles } from "@material-ui/core";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React from "react";
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
  }
}));

export const IncomeForm = () => {
  const { user }: any = useAuth();
  const { loading, data } = useBankAccountsQuery({ variables: { id: user } });
  const [value, setValue] = React.useState({ amount: 0, bankName: "" });
  const classes = useStyles();

  const handleChange = (e: any) => {
    const target = e.target;
    if (target.name === "bankName")
      setValue(old => ({ ...old, bankName: target.value }));
    else {
      setValue(old => ({ ...old, amount: target.value }));
    }
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <form>
      <div className={classes.div}>
        <FormControl>
          <InputLabel id="bank">Bank name</InputLabel>
          <Select
            id="bank"
            value={value.bankName}
            color="primary"
            fullWidth
            className={classes.dialogText}
            name="bankName"
            onChange={(e: any) => handleChange(e)}
          >
            {data &&
              data.user &&
              data.user.bankAccounts &&
              data.user.bankAccounts.map(bank => (
                <MenuItem
                  style={{ color: "black" }}
                  value={bank.bankName}
                  key={bank.id}
                >
                  {bank.bankName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <InputLabel id="amount">Amount of money</InputLabel>
        <TextField
          color="primary"
          id="amount-field"
          className={classes.dialogText}
          InputProps={{
            inputProps: { min: 0 },
            classes: { root: classes.dialogText }
          }}
          name="amount"
          type="number"
          value={value.amount}
          onChange={(e: any) => handleChange(e)}
        />
      </div>
    </form>
  );
};
