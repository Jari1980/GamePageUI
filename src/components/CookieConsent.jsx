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
        <div style={{background: "yellow", padding: "20px", position: "fixed", width:"100%", textAlign: "center"}}> 
            <h3>Cookie Consent</h3>
            <p>I dont use other cookies than this, my webprovider might so in good practice I let you, the user, know.</p>
            <Button style={{marginRight: "50px"}} onClick={giveCookieConsent}>Ok</Button>
        </div>
    );
};

export default CookieConsent;