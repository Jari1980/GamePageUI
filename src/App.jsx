import React from "react";
import { useCookies } from "react-cookie";
import CookieConsent from "./components/CookieConsent";

const App = () => {
  const [cookies, setCookies] = useCookies(["cookieConsent"]);
 

  return (
    <>
    <h2>Heluu</h2>
    {!cookies.cookieConsent && <CookieConsent />}
    </>
  )
}

export default App
