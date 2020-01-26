import { Button, InputLabel, TextField } from "@material-ui/core";
import {
  useAddCashMutation,
  useSubtractCashMutation
} from "generated/apolloComponents";

import React from "react";
import { addCashMutation } from "graphql/cash";
import { makeStyles } from "@material-ui/core";
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
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "75%"
  },
  buttonNotPressed: {
    opacity: 0.7
  },
  formWidth: {
    width: "90%"
  }
}));
interface CashFlowProps {
  text: string;
  handleClose: () => void;
}

export const CashFlowForm = ({ text, handleClose }: CashFlowProps) => {
  const classes = useStyles();
  const { user }: any = useAuth();
  const [addCashMutation] = useAddCashMutation();
  const [subtractCashMutation] = useSubtractCashMutation();
  const [value, setValue] = React.useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let response;
    if (text.includes("income")) {
      response = await addCashMutation({
        variables: {
          id: user,
          amount: parseFloat(value)
        }
      });
    } else {
      response = await subtractCashMutation({
        variables: {
          id: user,
          amount: parseFloat(value)
        }
      });
    }
    console.log(response);
    handleClose();
  };

  return (
    <form
      id="cash-form"
      className={classes.formWidth}
      onSubmit={(e: any) => handleSubmit(e)}
    >
      <div className={classes.div}>
        <InputLabel id="moneyAmount">Amount of money</InputLabel>
        <TextField
          color="primary"
          id="amount-field"
          className={classes.dialogText}
          InputProps={{
            inputProps: { min: 0 },
            classes: { root: classes.dialogText }
          }}
          name="value"
          type="number"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
      {/* <Button variant="contained" type="submit" onClick={handleSubmit}>
        press
      </Button> */}
    </form>
  );
};
