import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

import { CircularProgress } from "@material-ui/core";
import React from "react";
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
  const { loading, data } = useOverviewQuery({
    variables: { id: user }
  });
  const classes = useStyles();

  return loading ? (
    <CircularProgress />
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
          {data && `Account: ${data.user.bankAccounts![0].moneyAmount} PLN`}
        </Typography>
      </CardContent>
    </Card>
  );
};
