import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MatchMaker(props) {
  const [succOpen, setSuccOpen] = useState(true);

  const handleSuccessClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccOpen(false);
  };

  return (
    <Snackbar
      key={"success"}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={succOpen}
      autoHideDuration={6000}
      onClose={handleSuccessClose}
    >
      <Alert
        onClose={handleSuccessClose}
        severity="success"
        sx={{ width: "100%" }}
      >
        {`Match-Maker! You found all the matches in ${props.totalmove} moves.`}
      </Alert>
    </Snackbar>
  );
}
