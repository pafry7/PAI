import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

import AccountBalance from "@material-ui/icons/AccountBalance";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { OperationDialog } from "AuthenticatedApp/common/OperationDialog";
import React from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    speedDial: {
      position: "absolute",
      "&.MuiSpeedDial-directionLeft": {
        bottom: theme.spacing(2),
        right: theme.spacing(3)
      }
    },
    dial: {
      width: "70px",
      height: "70px"
    },
    smallDial: {
      width: "45px",
      height: "45px",
      color: theme.palette.common.black
    }
  })
);

const actions = [
  { icon: <AccountBalance />, name: "Add account" },
  { icon: <ArrowUpwardIcon />, name: "Add expense" },
  { icon: <ArrowDownwardIcon />, name: "Add income" }
];

export function CircleDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (text: string) => {
    setText(text);
    setOpenDialog(true);
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        FabProps={{ classes: { root: classes.dial } }}
        onOpen={handleOpen}
        open={open}
        direction="left"
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            FabProps={{ classes: { root: classes.smallDial } }}
            tooltipTitle={action.name}
            onClick={() => handleOpenDialog(action.name)}
          />
        ))}
      </SpeedDial>
      <OperationDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        text={text}
      />
    </>
  );
}
