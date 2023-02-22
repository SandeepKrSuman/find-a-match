import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
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

export default function ReShare(props) {
  const namePresent = localStorage.getItem("famuser");
  function handleShareClick() {
    if (!namePresent) {
      props.args.setShowMenu(true);
    }
  }
  function handleRestart() {
    props.args.setFlip1(false);
    props.args.setFlip2(false);
    props.args.setFlip3(false);
    props.args.setFlip4(false);
    props.args.setFlip5(false);
    props.args.setFlip6(false);
    props.args.setFlip7(false);
    props.args.setFlip8(false);
    props.args.setFlip9(false);
    props.args.setFlip10(false);
    props.args.setFlip11(false);
    props.args.setFlip12(false);
    props.args.setStore(null);
    props.args.setCurrElem(null);
    props.args.setMove(0);
    props.args.setMatchFound(0);
    props.args.setShowMenu(false);
    props.args.drawEmoji();
  }
  return (
    <div style={{ textAlign: "center", marginTop: "7%" }}>
      <Button
        variant="outlined"
        size="large"
        color="error"
        disabled={props.args.move === 0 ? true : false}
        onClick={handleRestart}
        endIcon={<ReplayIcon />}
      >
        {props.args.matchFound === 6 ? "Find Again" : "Restart"}
      </Button>
      <span style={{ margin: "0 10px" }} />

      {namePresent ? (
        <RWebShare
          data={{
            text: `Wow! matchmaker ${namePresent} found all the matches in ${props.args.move} moves.\nCan you beat ${namePresent}'s score?\nClick on the link to accept the challenge.\n`,
            url: `${baseUrl}?fr=${encodeName(namePresent, 3)}&scr=${encodeMove(
              parseInt(props.args.move)
            )}&utm=fam`,
            title: "Find A Match",
          }}
          onClick={() => {}}
        >
          <Button
            variant="outlined"
            size="large"
            color="error"
            disabled={props.args.matchFound === 6 ? false : true}
            endIcon={<ShareIcon />}
          >
            Share
          </Button>
        </RWebShare>
      ) : (
        <Button
          variant="outlined"
          size="large"
          color="error"
          disabled={props.args.matchFound === 6 ? false : true}
          endIcon={<ShareIcon />}
          onClick={handleShareClick}
        >
          Share
        </Button>
      )}
    </div>
  );
}
