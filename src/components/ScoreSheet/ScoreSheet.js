import Button from "@mui/material/Button";

export default function ScoreSheet(props) {
  return (
    <div style={{ textAlign: "center", marginBottom: "7%" }}>
      <Button
        variant="outlined"
        color="warning"
        disabled={props.moves === 0 ? true : false}
      >
        Match Found <br />[ {`${props.matches}`} / 8 ]
      </Button>
      <span style={{ margin: "0 10px" }} />
      <Button
        variant="outlined"
        color="warning"
        disabled={props.moves === 0 ? true : false}
      >
        Total Moves <br />[ {`${props.moves}`} ]
      </Button>
    </div>
  );
}
