import EmojiCard from "../Cards/EmojiCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function PlayGround() {
  return (
    <Container maxWidth="sm">
      <Grid container columnSpacing={2} rowSpacing={4}>
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
        <EmojiCard />
      </Grid>
    </Container>
  );
}
