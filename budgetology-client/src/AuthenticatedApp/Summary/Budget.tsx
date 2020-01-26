import { Card, CardContent, Typography } from "@material-ui/core";

import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core";
import { useAuth } from "common/AuthContent";
import { useOverviewQuery } from "generated/apolloComponents";

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black
  },
  typoMargin: {
    marginBottom: "10px"
  }
}));
export const Budget = () => {
  const { user }: any = useAuth();
  const { loading, data, startPolling } = useOverviewQuery({
    variables: { id: user }
  });
  const classes = useStyles();
  let moneyFromAllAccounts;
  if (data && data.user && data.user.bankAccounts) {
    moneyFromAllAccounts = data.user.bankAccounts.reduce((acc, value) => {
      return acc + value.moneyAmount;
    }, 0);
    startPolling(5000);
  }
  return loading ? (
    <Skeleton variant="rect" width={550} height={180} />
  ) : (
    <Card className={classes.paper}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          {data && `Your budget: ${data.user.budget} PLN`}
        </Typography>
        <Typography className={classes.typoMargin}>
          {data && `Cash: ${data.user.cash} PLN`}
        </Typography>
        <Typography className={classes.typoMargin}>
          {`Accounts: ${moneyFromAllAccounts ? moneyFromAllAccounts : "0"}`}
        </Typography>
      </CardContent>
    </Card>
  );
};
