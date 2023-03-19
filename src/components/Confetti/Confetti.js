import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function PopConfetti() {
  const { width, height } = useWindowSize();
  return (
    <Confetti
      numberOfPieces={500}
      width={width - 25}
      height={height}
      recycle={false}
    />
  );
}
