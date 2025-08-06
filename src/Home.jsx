import React from "react";
import { useCookies } from "react-cookie";
import "./Home.css";
import CookieConsent from "./components/CookieConsent";
import { useGlobalContext } from "./components/context";

const Home = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
  const { bgColor, setBgColor } = useGlobalContext();
  const { dark, setDar } = useGlobalContext();

  return (
    <>
      {dark === "dark" ? (
        <div id="main" style={{background: bgColor}}>
          {!cookies.cookieConsent && <CookieConsent />}
          <h1 id="logo" data-text="Games">
            Games
          </h1>
          <div id="rain"></div>
        </div>
      ) : (
        <div id="main" style={{background: bgColor}}>
          {!cookies.cookieConsent && <CookieConsent />}
          <h1 id="logo" data-text="Games">
            Games
          </h1>
          <div id="rain"></div>
        </div>
      )}
    </>
  );
};

export default Home;
