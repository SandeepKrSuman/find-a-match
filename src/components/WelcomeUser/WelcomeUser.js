import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { Link, useSearchParams } from "react-router-dom";
import "./WelcomeUser.css";

const decodeName = (str, n) => {
  const ALPHABET_LENGTH = 26;
  const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shifted = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = ALPHABET.indexOf(char);
    if (index !== -1) {
      let shiftedIndex = (index - n) % ALPHABET_LENGTH;
      char = ALPHABET[shiftedIndex];
    }
    shifted += char;
  }
  return shifted;
};

const decodeMove = (encodedMove) => {
  let decodedMove = 0;
  for (let i = 0; i < encodedMove.length; i++) {
    decodedMove += encodedMove[encodedMove.length - i - 1] * Math.pow(2, i);
  }
  return decodedMove;
};

export default function WelcomeUser() {
  const [searchParams] = useSearchParams();

  const from =
    searchParams.get("fr") && searchParams.get("fr").length > 0
      ? decodeName(searchParams.get("fr"), 3)
      : "Your Bestie";

  const moves =
    searchParams.get("scr") && decodeMove(searchParams.get("scr")) > 6
      ? decodeMove(searchParams.get("scr"))
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
