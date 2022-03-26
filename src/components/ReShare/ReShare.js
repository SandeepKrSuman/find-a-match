import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
import { RWebShare } from "react-web-share";

const randids = () => {
  let rid = "";
  for (var i = 0; i < 10; i++)
    rid +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".charAt(
        Math.floor(Math.random() * 62)
      );
  return rid;
};

export default function ReShare(props) {
  const namePresent = localStorage.getItem("famuser");
  function handleShareClick() {
    if (!namePresent) {
      props.setShowMenu(true);
    }
  }
  return (
    <div style={{ textAlign: "center", marginTop: "7%" }}>
      <Button
        variant="outlined"
        size="large"
        color="error"
        disabled={props.move === 0 ? true : false}
        onClick={() => {
          window.location.reload();
        }}
        endIcon={<ReplayIcon />}
      >
        {props.matchFound === 6 ? "Find Again" : "Restart"}
      </Button>
      <span style={{ margin: "0 10px" }} />

      {namePresent ? (
        <RWebShare
          data={{
            text: `Wow! matchmaker ${namePresent} found all the matches in ${props.move} moves.\nCan you beat ${namePresent}'s score?\nClick on the link to accept the challenge.\n`,
            url: `https://findamatch.netlify.app/share?diff=${randids()}&from=${namePresent}&x=${new Date().getTime()}${randids()}&y=${randids()}-${
              props.move
            }&z=${new Date().getTime() * 2}${randids()}`,
            title: "Find A Match",
          }}
          onClick={() => {}}
        >
          <Button
            variant="outlined"
            size="large"
            color="error"
            disabled={props.matchFound === 6 ? false : true}
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
          disabled={props.matchFound === 6 ? false : true}
          endIcon={<ShareIcon />}
          onClick={handleShareClick}
        >
          Share
        </Button>
      )}
    </div>
  );
}
