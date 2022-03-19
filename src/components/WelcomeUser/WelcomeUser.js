import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link, useSearchParams } from "react-router-dom";
import "./WelcomeUser.css";

export default function WelcomeUser() {
  const [searchParams] = useSearchParams();
  const from =
    searchParams.get("from") && searchParams.get("from").length > 0
      ? searchParams.get("from")
      : "Your Bestie";
  const moves =
    searchParams.get("y") && parseInt(searchParams.get("y")) > 6
      ? parseInt(searchParams.get("y"))
      : "minimum number of";
  return (
    <div className="main-container">
      <Typography className="typ" variant="h4" component="div" gutterBottom>
        {`${from}`}
      </Typography>
      <Typography className="typ" variant="h6" component="div" gutterBottom>
        Challenged you to find all the matches in
      </Typography>
      <Typography className="typ" variant="h6" component="div" gutterBottom>
        {`${moves} moves.`}
      </Typography>
      <br /> <br />
      <Link className="accept-link" to="/">
        <Button
          variant="contained"
          color="success"
          size="large"
          endIcon={<DoneOutlineIcon />}
        >
          Accept
        </Button>
      </Link>
    </div>
  );
}
