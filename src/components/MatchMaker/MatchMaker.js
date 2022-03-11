import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function MatchMaker(props) {
  const previous_score = parseInt(localStorage.getItem("famscore"));
  const current_score = props.totalmove;
  if (!previous_score || current_score < previous_score) {
    localStorage.setItem("famscore", current_score);
  }
  const best_score = localStorage.getItem("famscore");
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
        {`Match-Maker ! `}
        {`You found all the matches in ${props.totalmove} moves.`}
        <br /> <br />
        <p
          style={{
            textAlign: "center",
            backgroundColor: "#ffffff",
            color: "#000000",
          }}
        >{`Your All Time Best: ${best_score} moves.`}</p>
      </Alert>
    </Snackbar>
  );
}
