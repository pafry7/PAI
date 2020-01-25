import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

import AccountBalance from "@material-ui/icons/AccountBalance";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DashBoardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useAuth } from "common/AuthContent";
import { useLogoutMutation } from "generated/apolloComponents";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
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
  const { logout }: any = useAuth();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [logoutMutation] = useLogoutMutation();
  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

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
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={event => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <AccountBalance />
          </ListItemIcon>
          <ListItemText primary="Bank Account" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={event => {
            handleListItemClick(event, 3);
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
