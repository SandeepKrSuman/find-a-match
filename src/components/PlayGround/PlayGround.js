import { useState } from "react";
import EmojiCard from "../Cards/EmojiCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { handleClick, drawer } from "../../controller/Referee";
import ScoreSheet from "../ScoreSheet/ScoreSheet";
import MatchMaker from "../MatchMaker/MatchMaker";
import Intro from "../Intro/Intro";
import ReShare from "../ReShare/ReShare";
import ShareMenu from "../ShareMenu/ShareMenu";

const emojis = drawer();

export default function PlayGround() {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);
  const [flip3, setFlip3] = useState(false);
  const [flip4, setFlip4] = useState(false);
  const [flip5, setFlip5] = useState(false);
  const [flip6, setFlip6] = useState(false);
  const [flip7, setFlip7] = useState(false);
  const [flip8, setFlip8] = useState(false);
  const [flip9, setFlip9] = useState(false);
  const [flip10, setFlip10] = useState(false);
  const [flip11, setFlip11] = useState(false);
  const [flip12, setFlip12] = useState(false);
  const [store, setStore] = useState(null);
  const [currElem, setCurrElem] = useState(null);
  const [move, setMove] = useState(0);
  const [matchFound, setMatchFound] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container maxWidth="sm">
      <Intro />
      <ScoreSheet moves={move} matches={matchFound} />
      <Grid container columnSpacing={2} rowSpacing={4}>
        <EmojiCard
          imgId={emojis[0]}
          show={flip1}
          execute={() => {
            handleClick(
              setFlip1,
              store,
              setStore,
              emojis[0],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[1]}
          show={flip2}
          execute={() => {
            handleClick(
              setFlip2,
              store,
              setStore,
              emojis[1],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[2]}
          show={flip3}
          execute={() => {
            handleClick(
              setFlip3,
              store,
              setStore,
              emojis[2],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[3]}
          show={flip4}
          execute={() => {
            handleClick(
              setFlip4,
              store,
              setStore,
              emojis[3],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[4]}
          show={flip5}
          execute={() => {
            handleClick(
              setFlip5,
              store,
              setStore,
              emojis[4],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[5]}
          show={flip6}
          execute={() => {
            handleClick(
              setFlip6,
              store,
              setStore,
              emojis[5],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[6]}
          show={flip7}
          execute={() => {
            handleClick(
              setFlip7,
              store,
              setStore,
              emojis[6],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[7]}
          show={flip8}
          execute={() => {
            handleClick(
              setFlip8,
              store,
              setStore,
              emojis[7],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[8]}
          show={flip9}
          execute={() => {
            handleClick(
              setFlip9,
              store,
              setStore,
              emojis[8],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[9]}
          show={flip10}
          execute={() => {
            handleClick(
              setFlip10,
              store,
              setStore,
              emojis[9],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[10]}
          show={flip11}
          execute={() => {
            handleClick(
              setFlip11,
              store,
              setStore,
              emojis[10],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
        <EmojiCard
          imgId={emojis[11]}
          show={flip12}
          execute={() => {
            handleClick(
              setFlip12,
              store,
              setStore,
              emojis[11],
              currElem,
              setCurrElem,
              move,
              setMove,
              matchFound,
              setMatchFound
            );
          }}
        />
      </Grid>
      <ReShare move={move} matchFound={matchFound} setShowMenu={setShowMenu} />
      <ShareMenu showMenu={showMenu} setShowMenu={setShowMenu} move={move} />
      {matchFound === 6 && <MatchMaker totalmove={move} />}
    </Container>
  );
}
