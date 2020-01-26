import { CircularProgress, Paper, makeStyles } from "@material-ui/core";

import BorderClearIcon from "@material-ui/icons/BorderClear";
import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useAuth } from "common/AuthContent";
import { useMoneyFlowQuery } from "generated/apolloComponents";

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: "50px"
  },
  expense: {
    backgroundColor: theme.palette.primary.main
  },
  income: {
    backgroundColor: theme.palette.secondary.main
  },
  skeletonMargin: {
    marginTop: "5px"
  },
  div: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "center"
  },
  icon: { fontSize: "56px", color: theme.palette.common.white }
}));

export const TableComponent = () => {
  const { user }: any = useAuth();
  const { loading, data, startPolling } = useMoneyFlowQuery({
    variables: { id: user }
  });

  if (!loading) {
    startPolling(1000);
  }
  const classes = useStyles();
  return loading ? (
    <>
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
      <Skeleton
        className={classes.skeletonMargin}
        variant="rect"
        width={1204}
        height={57}
      />
    </>
  ) : data && data.all && data.all.length !== 0 ? (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Bank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.all.map(object => (
            <TableRow
              className={
                object.type === "income" ? classes.income : classes.expense
              }
              key={object.id ? object.id : "dad"}
            >
              <TableCell component="th" scope="row">
                {object.description}
              </TableCell>
              <TableCell>{object.amount}</TableCell>
              <TableCell>{object.date}</TableCell>
              <TableCell>{object.bankName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <div className={classes.div}>
      <BorderClearIcon className={classes.icon} />
    </div>
  );
};
