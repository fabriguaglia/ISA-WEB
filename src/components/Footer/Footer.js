import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="contact-title">
        <div className="footer-text">
          Contacto
        </div>
      </div>
      <div className="contact-info">
        <div className="footer-content">
          <div className="address-section">
            <div>Dirección</div>
            <hr className="separator" />
            <div>
              Comodoro Rivadavia 1385<br/>
              General Pacheco | CP: 1617<br/>
              Buenos Aires
            </div>
            <hr className="separator" />
            <div>Teléfono</div>
            <hr className="separator" />
            <div>+54 11 4740 1994</div>
            <div>+54 11 4740 5981</div>
          </div>
          <div className="map-section">
            <iframe
              title="Map"
              width="100%"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1644.87042491206!2d-58.6442606020544!3d-34.45872574825269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92ad8f398517174e!2sInstituto+Santa+Ana!5e0!3m2!1ses!2sar!4v1474979722594`}
            />
          </div>
        </div>
      </div>
      <div className="bg-primary text-white text-center p-1 derechosreservados" style={{ backgroundColor: '#334779 !important', color: '#fff !important' }}>
          Copyright © 2024 Instituto Santa Ana, todos los derechos reservados.
        </div>
    </footer>
  )
}

export default Footer