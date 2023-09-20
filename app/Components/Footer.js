import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer section">
      <div className="footer--left-side">
        <p className="footer--links">© 2023 Legalix® Inc.</p>
        <p className="footer--links">Terms of Service</p>
        <p className="footer--links">Privacy Policy </p>
        <p className="footer--links">Accessibility</p>
      </div>

      <div className="footer--right-side">
        <p className="footer--links">Questions?</p>
        <a className="footer--links">Contact us</a>
      </div>
    </div>
  );
}

export default Footer;
