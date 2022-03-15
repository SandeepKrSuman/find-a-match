import ShareIcon from "@mui/icons-material/Share";
import ReplayIcon from "@mui/icons-material/Replay";
import Button from "@mui/material/Button";
export default function ReShare(props) {
  function handleShareClick() {
    const namePresent = localStorage.getItem("famuser");
    if (namePresent) {
      // don't ask for name.
      console.log(namePresent);
    } else {
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
    </div>
  );
}
