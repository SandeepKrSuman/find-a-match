import { Fragment, useState } from "react";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./EmojiCard.css";

export default function EmojiCard() {
  const [isFlipped, setFlipped] = useState(false);

  return (
    <Fragment>
      <Grid
        className="emoji-container"
        item
        xs={3}
        onClick={() => setFlipped(!isFlipped)}
      >
        <div className={`${isFlipped ? "card is-flipped" : "card"}`}>
          <div className="card__face card__face--front">front</div>
          <div className="card__face card__face--back">
            <img className="emoji" alt="emoji" src="/fam-logo.png" />
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}
