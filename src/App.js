import { Fragment } from "react";
import BrandBar from "./components/BrandBar/BrandBar";
import PlayGround from "./components/PlayGround/PlayGround";

export default function App() {
  return (
    <Fragment>
      <BrandBar />
      <PlayGround />
    </Fragment>
  );
}
