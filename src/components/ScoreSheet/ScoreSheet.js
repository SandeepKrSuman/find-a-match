import Button from "@mui/material/Button";

export default function ScoreSheet() {
  return (
    <div style={{ textAlign: "center", marginBottom: "7%" }}>
      <Button variant="outlined" color="warning" disabled>
        Match Found <br />[ 0 / 6 ]
      </Button>
      <span style={{ margin: "0 10px" }} />
      <Button variant="outlined" color="warning" disabled>
        Total Moves <br />[ 0 ]
      </Button>
    </div>
  );
}
