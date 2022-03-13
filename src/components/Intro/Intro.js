import { forwardRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Intro() {
  const present = localStorage.getItem("famscore");
  const [open, setOpen] = useState(present ? false : true);

  setTimeout(() => {
    setOpen(false);
  }, 3000);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ backgroundColor: "#ffcc4d" }}>
          {"Get Ready!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ color: "#dc2c43" }}
          >
            Find all the matches in minimum number of moves possible.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
