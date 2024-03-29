import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import ShareIcon from "@mui/icons-material/Share";
import { RWebShare } from "react-web-share";

const baseUrl = "https://findamatch.netlify.app/share";

const encodeName = (str, n) => {
  const ALPHABET_LENGTH = 26;
  const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shifted = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = ALPHABET.indexOf(char);
    if (index !== -1) {
      let shiftedIndex = (index + n) % ALPHABET_LENGTH;
      char = ALPHABET[shiftedIndex];
    }
    shifted += char;
  }
  return shifted;
};

const encodeMove = (rawMove) => {
  let encodedMove = "";
  while (rawMove > 0) {
    encodedMove = (rawMove & 1) + encodedMove;
    rawMove = rawMove >> 1;
  }
  return encodedMove;
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShareMenu(props) {
  const [userName, setUserName] = React.useState("");

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleClose() {
    props.setShowMenu(false);
  }

  function handleShare() {
    if (userName.length > 0) {
      localStorage.setItem("famuser", userName);
      props.setShowMenu(false);
    }
  }

  return (
    <Dialog
      open={props.showMenu}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle sx={{ backgroundColor: "#ffcc4d" }}>
        What are you called
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ color: "#dc2c43" }}>
          ...other than a 'Genius'?
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter Your Name"
          type="text"
          fullWidth
          variant="standard"
          value={userName}
          onChange={handleChange}
          color="error"
        />
      </DialogContent>
      <DialogActions>
        <Button sx={{ color: "#707070" }} onClick={handleClose}>
          Cancel
        </Button>
        <RWebShare
          data={{
            text: `Wow! matchmaker ${userName} found all the matches in ${props.move} moves.\nCan you beat ${userName}'s score?\nClick on the link to accept the challenge.\n`,
            url: `${baseUrl}?fr=${encodeName(userName, 3)}&scr=${encodeMove(
              parseInt(props.move)
            )}&utm=fam`,
            title: "Find A Match",
          }}
          onClick={() => {
            handleShare();
          }}
        >
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={handleShare}
            endIcon={<ShareIcon />}
          >
            Share
          </Button>
        </RWebShare>
      </DialogActions>
    </Dialog>
  );
}
