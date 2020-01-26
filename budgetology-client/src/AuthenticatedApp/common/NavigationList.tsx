import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "@material-ui/core";
import {
  useBankAccountsQuery,
  useDeleteBankAccountMutation
} from "generated/apolloComponents";

import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DashBoardIcon from "@material-ui/icons/Dashboard";
import DeleteIcon from "@material-ui/icons/Delete";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useAuth } from "common/AuthContent";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    color: theme.palette.common.white,
    maxWidth: 360,
    height: "inherit",
    backgroundColor: theme.palette.secondary.main
  },
  logo: {
    fontSize: "1.5vw",
    lineHeight: "0.9em",
    fontWeight: theme.typography.fontWeightBold
  },
  logoNav: {
    height: "100px",
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export function NavigationList() {
  const classes = useStyles();
  const { logout, user }: any = useAuth();
  const { loading, data, startPolling, refetch } = useBankAccountsQuery({
    variables: { id: user }
  });
  const [deleteBankAccountMutation] = useDeleteBankAccountMutation();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  if (data) {
    startPolling(1000);
  }
  const handleBankAccountRemoval = async (id: string) => {
    console.log(id);
    const response = await deleteBankAccountMutation({ variables: { id: id } });
    if (response && response.data && response.data.deleteBankAccount) {
      refetch();
    }
  };

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  let numberOfAccounts = 0;
  if (data && data.user && data.user.bankAccounts) {
    // startPolling(5000);
    numberOfAccounts = data.user.bankAccounts.length;
  }

  return (
    <div className={classes.root}>
      <List className={classes.logoNav} component="nav" aria-label="logo">
        <ListItem alignItems="center">
          <div aria-label="Logo name" className={classes.logo}>
            Budgetology
          </div>
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={event => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <DashBoardIcon />
          </ListItemIcon>
          <ListItemText primary="Summary" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={event => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary="Cash" />
        </ListItem>
        {loading ? (
          <div>Loading...</div>
        ) : (
          data &&
          data.user &&
          data.user.bankAccounts &&
          data.user.bankAccounts.map((account, index) => (
            <ListItem
              key={account.id}
              button
              selected={selectedIndex === 2 + index}
              onClick={event => handleListItemClick(event, 2 + index)}
            >
              <ListItemIcon>
                <AccountBalance />
              </ListItemIcon>
              <ListItemText primary={`${account.bankName}`} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleBankAccountRemoval(account.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 2 + numberOfAccounts + 1}
          onClick={event => {
            handleListItemClick(event, 2 + numberOfAccounts + 1);
            logout();
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );
}
