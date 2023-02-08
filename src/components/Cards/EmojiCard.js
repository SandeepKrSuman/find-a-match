import Grid from "@mui/material/Grid";
import "./EmojiCard.css";

export default function EmojiCard(props) {
  return (
    <Grid
      className="emoji-container"
      sx={{ padding: "15px" }}
      item
      xs={4}
      md={3}
    >
      <div
        className={`${props.show ? "card is-flipped do-not-click" : "card"}`}
        onClick={() => {
          props.execute();
        }}
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
  );
}
