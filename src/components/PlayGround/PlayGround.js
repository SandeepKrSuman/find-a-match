import { useState } from "react";
import EmojiCard from "../Cards/EmojiCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { handleClick, drawer } from "../../controller/Referee";

const emojis = drawer();

export default function PlayGround() {
  const [store, setStore] = useState(null);
  const [elem, setElem] = useState(null);
  return (
    <Container maxWidth="sm">
      <Grid container columnSpacing={2} rowSpacing={4}>
        {emojis.map((emoji, index) => {
          return (
            <EmojiCard
              key={index}
              usekey={index}
              execute={(setFlipped, elemid) =>
                handleClick(
                  store,
                  setStore,
                  emoji,
                  setFlipped,
                  elem,
                  setElem,
                  elemid
                )
              }
              imgId={emoji}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
