import { Fragment, useEffect } from "react";
import BrandBar from "./components/BrandBar/BrandBar";
import PlayGround from "./components/PlayGround/PlayGround";

export default function App() {
  useEffect(() => {
    console.log(`    ╔═══╗        ╔╗    ╔═══╗    ╔═╗╔═╗      ╔╗     ╔╗  
    ║╔══╝        ║║    ║╔═╗║    ║║╚╝║║     ╔╝╚╗    ║║  
    ║╚══╗╔╗╔═╗ ╔═╝║    ║║ ║║    ║╔╗╔╗║╔══╗ ╚╗╔╝╔══╗║╚═╗
    ║╔══╝╠╣║╔╗╗║╔╗║    ║╚═╝║    ║║║║║║╚ ╗║  ║║ ║╔═╝║╔╗║
   ╔╝╚╗  ║║║║║║║╚╝║    ║╔═╗║    ║║║║║║║╚╝╚╗ ║╚╗║╚═╗║║║║
   ╚══╝  ╚╝╚╝╚╝╚══╝    ╚╝ ╚╝    ╚╝╚╝╚╝╚═══╝ ╚═╝╚══╝╚╝╚╝
                                                       
                                                       
`);
    console.log("Made with ❤ by SandeepKrSuman");
    console.log("https://github.com/SandeepKrSuman");
  }, []);
  return (
    <Fragment>
      <BrandBar />
      <PlayGround />
    </Fragment>
  );
}
