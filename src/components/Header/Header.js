import React from 'react';
import SantaAnaLogo from "./SantaAnaLogo.png"
import './header.css';
import Swal from 'sweetalert2'

const Header = () => {
    const handleAdmisionesClick = () => {
      Swal.fire({
        icon: 'info',
        title: 'Disculpe las molestias',
        text: 'Página en construcción'
      });
    };
  return (
    <>
      <div className="container-fluid navbarprincipal d-flex justify-content-between align-items-center">
        <div className="d-none d-lg-block">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="mailto:admin@santa-ana.edu.ar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-envelope-at" viewBox="0 0 16 16">
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
              </svg>
              <a className='textcolor maillink' href='mailto:admin@santa-ana.edu.ar'>admin@santa-ana.edu.ar</a>
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a href="/blog"><button type="button" className="btn textcolor" >Blog</button></a>
          <a href="https://login.microsoftonline.com/"><button type="button" className="btn textcolor">Office 365</button></a>
          <a href="https://santillanacompartir.com.ar/"><button type="button" className="btn btn-danger textcolor" >AulaVirtual</button></a>
        </div>
      </div>
      <nav className="navbar bg-body-tertiary">
      <div className="container-fluid headerlogo d-flex justify-content-between align-items-center">
        <div className="left-section">
          <a href="/">
            <img src={SantaAnaLogo} className="isalogoheader img-fluid" alt="isalogo" />
          </a>
        </div>
        <div className="container-fluid header-container d-flex justify-content-between align-items-center">
        <div className="left-section">
        </div>
        <div className="right-section d-none d-lg-flex" id="columns-container">
          <div className="text-end ms-auto">
            <div className="row">
              <div className="col long-text">
                <a href='niveles' className='linkhide'>Niveles</a>
              </div>
              <div className="col long-text">
                <a onClick={handleAdmisionesClick} className='linkhide'>Sobre nosotros</a>
              </div>
              <div className="col long-text">
                <a href='contact' className='linkhide'>Contacto</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="d-flex align-items-center">
          <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Instituto Santa Ana</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item dropdown">
              <a className="nav-link active" aria-current="page" href='/niveles'>Niveles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" onClick={handleAdmisionesClick}>Sobre nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href='/contact'>Contacto y Soporte</a>
            </li>
          </ul>
        </div>
        <div className="bg-primary text-white text-center p-1 derechosreservados" style={{ backgroundColor: '#334779 !important', color: '#fff !important' }}>
          Copyright © 2024 Instituto Santa Ana, todos los derechos reservados.
        </div>
      </div>
      </nav>
    </>
  );
};

export default Header;
