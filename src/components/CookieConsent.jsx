import React from 'react';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';

const CookieConsent = () => {
    const [cookies, setCookies] = useCookies("cookieConsent");
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 1);
    const giveCookieConsent = () => {
        setCookies("cookieConsent", true, {path: "/", expires: expirationDate})
    }

    return (
        <div style={{background: "yellow", padding: "20px", position: "fixed", width:"100%", textAlign: "center", zIndex: "3"}}> 
            <h3>Cookie Consent</h3>
            <p>I use cookies for cookieconsent (timed for one day as is) and session based cookies in order to verify that user is logged in (session based means they are in browser memory until computer or browser is closed), my webprovider might add more essential cookies so in good practice I let you, the user, know.</p>
            <Button style={{marginRight: "50px"}} onClick={giveCookieConsent}>Ok</Button>
        </div>
    );
};

export default CookieConsent;