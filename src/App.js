import { Fragment, useEffect } from "react";
import BrandBar from "./components/BrandBar/BrandBar";
import CookieConsent from "./components/CookiePolicy/CookieConsent";
import Footer from "./components/Footer/Footer";
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
      <Footer />
      <CookieConsent />
    </Fragment>
  );
}
