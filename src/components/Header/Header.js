import React from 'react';
import SantaAnaLogo from "./SantaAnaLogo.png";
import './header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="icon" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg>
          <a href="mailto:admin@santa-ana.edu.ar" className="email-link">admin@santa-ana.edu.ar</a>
        </div>
        <div className="right-section">
          <a href="/blog" className="link">Blog</a>
          <a href="https://login.microsoftonline.com/" className="link">Office 365</a>
          <a href="https://www.santillanaconnect.com/Account/Login/" className="special-link">AulaVirtual</a>
        </div>
      </div>
      <div className="bottom-section">
        <div className="bottom-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
          <img src={SantaAnaLogo} alt="imagen2" className="bottom-image-center" />
        </div>
      </div>
    </>
  );
};

export default Header;
