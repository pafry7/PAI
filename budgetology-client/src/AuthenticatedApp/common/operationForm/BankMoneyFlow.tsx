import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  makeStyles
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import {
  useAddExpenseMutation,
  useBankAccountsQuery
} from "generated/apolloComponents";

import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import { useAddIncomeMutation } from "generated/apolloComponents";
import { useAuth } from "common/AuthContent";

const useStyles = makeStyles(theme => ({
  dialogText: {
    color: theme.palette.common.black,
    marginBottom: theme.spacing(2)
  },
  dialogWidth: {
    width: "20%"
  },
  formWidth: {
    width: "90%"
  },
  div: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: theme.spacing(1)
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "75%"
  },
  buttonNotPressed: {
    opacity: 0.7
  }
}));

interface BankMoneyFlowProps {
  text: string;
  handleClose: () => void;
}

export const BankMoneyFlow = ({ text, handleClose }: BankMoneyFlowProps) => {
  const { user }: any = useAuth();
  const classes = useStyles();
  const [addExpenseMutation] = useAddExpenseMutation();
  const [addIncomeMutation] = useAddIncomeMutation();
  const { data } = useBankAccountsQuery({
    variables: { id: user }
  });
  const [value, setValue] = React.useState({
    amount: "",
    bankId: "",
    description: "",
    date: new Date()
  });

  const handleChange = (e: any) => {
    if (e.target) {
      const value = e.target.value;
      const name = e.target.name;
      setValue(old => ({ ...old, [name]: value }));
    } else {
      setValue(old => ({ ...old, date: e }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let response;
    if (text.includes("income")) {
      response = await addIncomeMutation({
        variables: {
          id: value.bankId,
          amount: parseFloat(value.amount),
          description: value.description,
          date: value.date
        }
      });
    } else {
      response = await addExpenseMutation({
        variables: {
          id: value.bankId,
          amount: parseFloat(value.amount),
          description: value.description,
          date: value.date
        }
      });
    }
    console.log(response);
    handleClose();
  };

  console.log(value);
  return (
    <form
      id="add-income-form"
      className={classes.formWidth}
      onSubmit={(e: any) => handleSubmit(e)}
    >
      <div className={classes.div}>
        <FormControl>
          <InputLabel id="bank">Bank name</InputLabel>
          <Select
            id="bank"
            value={value.bankId}
            color="primary"
            fullWidth
            className={classes.dialogText}
            name="bankId"
            onChange={(e: any) => handleChange(e)}
          >
            {data &&
              data.user &&
              data.user.bankAccounts &&
              data.user.bankAccounts.map(bank => (
                <MenuItem
                  style={{ color: "black" }}
                  value={bank.id}
                  key={bank.id}
                >
                  {bank.bankName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <InputLabel id="bank">Description</InputLabel>
        <TextField
          color="primary"
          id="description-field"
          className={classes.dialogText}
          InputProps={{
            classes: { root: classes.dialogText }
          }}
          name="description"
          value={value.description}
          onChange={(e: any) => handleChange(e)}
        />
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            id="date-picker-dialog"
            fullWidth
            label="Date picker"
            format="MM/dd/yyyy"
            value={value.date}
            onChange={(e: any) => handleChange(e)}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
      {/* <Button variant="contained" type="submit" onClick={handleSubmit}>
        press
      </Button> */}
    </form>
  );
};
