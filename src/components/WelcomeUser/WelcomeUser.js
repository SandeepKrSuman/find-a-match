import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
// import { Link } from "react-router-dom";
import "./WelcomeUser.css";

function Page404() {
  return (
    <div className="main-container">
      <Typography className="typ404" variant="h4" component="div" gutterBottom>
        xyz
      </Typography>
      <Typography className="typ404" variant="h6" component="div" gutterBottom>
        Challenged you to find all the matches in
      </Typography>
      <Typography className="typ404" variant="h6" component="div" gutterBottom>
        10 moves.
      </Typography>
      <br /> <br />
      {/* <Link className="goback-btn-link" to="/"> */}
      <Button
        variant="contained"
        color="success"
        size="large"
        endIcon={<DoneOutlineIcon />}
      >
        Accept
      </Button>
      {/* </Link> */}
    </div>
  );
}

export default Page404;
