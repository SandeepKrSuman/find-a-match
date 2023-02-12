import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const consent = localStorage.getItem("famconsent") === "true" ? true : false;
  const [accepted, setAccepted] = useState(consent ? consent : false);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".consent-card").classList.add("scale-up");
    }, 500);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("famconsent", true);
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="consent-container">
      <div className="consent-card">
        <div className="cookie-img">
          <img src="/assets/cookie.png" alt="cookie" />
        </div>
        <p>
          This website uses cookies to improve your experience. By using this
          website, you agree & accept our{" "}
          <a href="/policy">Cookie Policy & Privacy</a>
        </p>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={handleAccept}
        >
          Accept
        </Button>
      </div>
    </div>
  );
};

export default CookieConsent;
