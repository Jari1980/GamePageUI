import React from "react";
import { useCookies } from "react-cookie";
import "./App.css";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);

  return (
    <>
      <div id="main">
        {!cookies.cookieConsent && <CookieConsent />}
        <h1 id="logo" data-text="Games">
          Games
        </h1>
        <div id="rain"></div>
      </div>
    </>
  );
};

export default App;
