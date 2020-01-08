import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography
} from "@material-ui/core";
import React, { useState } from "react";

export const AuthDialog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog onClose={handleClose} aria-labelledby="test" open={open}>
        {/* <DialogTitle id="test" onClose={handleClose}>
          xD elo
        </DialogTitle> */}
        <DialogContent>
          <Typography>xD</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
