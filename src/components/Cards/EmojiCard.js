import { Fragment, useState } from "react";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./EmojiCard.css";

export default function EmojiCard() {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <Fragment>
      <Grid className="emoji-container" item xs={3}>
        <div
          className={`${isFlipped ? "card is-flipped" : "card"}`}
          onClick={() => setFlipped(!isFlipped)}
        >
          <div className="card__face card__face--front">
            <img
              className="emoji emoji-front"
              alt="emoji"
              src="/logo-grey.png"
            />
          </div>
          <div className="card__face card__face--back">
            <img className="emoji" alt="emoji" src="/fam-logo.png" />
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}
