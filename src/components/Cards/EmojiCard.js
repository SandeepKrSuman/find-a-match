import { Fragment, useState } from "react";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./EmojiCard.css";

export default function EmojiCard(props) {
  const [isFlipped, setFlipped] = useState(false);
  const [firstClicked, setFirstClicked] = useState(null);

  function handleClick(event) {
    setFirstClicked(event.currentTarget);
    props.execute(setFlipped, firstClicked, setFirstClicked);
  }

  return (
    <Fragment>
      <Grid className="emoji-container" item xs={3}>
        <div
          className={`${isFlipped ? "card is-flipped" : "card"}`}
          onClick={handleClick}
        >
          <div className="card__face card__face--front">
            <img
              className="emoji emoji-front"
              alt="emoji"
              src="/assets/logo-grey.png"
            />
          </div>
          <div className="card__face card__face--back">
            <img
              className="emoji"
              alt="emoji"
              src={`/assets/emoji-${props.imgId}.png`}
            />
          </div>
        </div>
      </Grid>
    </Fragment>
  );
}
