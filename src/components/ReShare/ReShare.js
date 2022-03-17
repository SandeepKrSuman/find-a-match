import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
import { RWebShare } from "react-web-share";
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
            text: "Can you beat xyz score and find all the matches in less than x moves?",
            url: `http://localhost:3000/share/${new Date().getTime()}-${
              props.move
            }-${new Date().getTime() * 2}`,
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
            onClick={handleShareClick}
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
