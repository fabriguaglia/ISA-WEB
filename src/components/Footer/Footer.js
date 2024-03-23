// Footer.js
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__contact">
        <h2></h2>
      </div>
      <div className="footer__info">
        <div className="footer__column">
          <div className="footer__address">
            Dirección Comodoro Rivadavia 1385 Genral Pacheco | CP: 1617 Buenos Aires
            Teléfono +54 11 4740 1994 +54 11 4740 5981
          </div>
        </div>
        <div className="footer__column">
          <form className="footer__form">
            <div className="footer__form-group">
              <label htmlFor="sector">SECTOR A CONSULTAR:</label>
              <span className="wpcf7-form-control-wrap your-recipient">
                <select
                  name="your-recipient"
                  className="wpcf7-form-control wpcf7-select wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                >
                  <option value="Administración">Administración</option>
                  <option value="Nivel Inicial">Nivel Inicial</option>
                  <option value="Nivel Primario">Nivel Primario</option>
                  <option value="Nivel Secundario">Nivel Secundario</option>
                  <option value="Nivel Terciario-Profesorado">Nivel Terciario-Profesorado</option>
                  <option value="Nivel Universitario">Nivel Universitario</option>
                </select>
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="name">NOMBRE:</label>
              <span className="wpcf7-form-control-wrap your-name">
                <input
                  type="text"
                  name="your-name"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                />
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="email">E.MAIL:</label>
              <span className="wpcf7-form-control-wrap your-email">
                <input
                  type="email"
                  name="your-email"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                  aria-required="true"
                  aria-invalid="false"
                />
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="phone">TELÉFONO:</label>
              <span className="wpcf7-form-control-wrap your-phone">
                <input
                  type="text"
                  name="your-phone"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                />
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="Horacontacto">HORARIO DE CONTACTO:</label>
              <span className="wpcf7-form-control-wrap your-Hora-de-contacto">
                <input
                  type="text"
                  name="your-Hora-de-contacto"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                />
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="city">DIRECCIÓN:</label>
              <span className="wpcf7-form-control-wrap your-city">
                <input
                  type="text"
                  name="your-city"
                  value=""
                  size="40"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                />
              </span>
            </div>
            <div className="footer__form-group">
              <label htmlFor="message">MENSAJE:</label>
              <span className="wpcf7-form-control-wrap your-message">
                <textarea
                  name="your-message"
                  cols="40"
                  rows="10"
                  className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                  aria-required="true"
                  aria-invalid="false"
                ></textarea>
              </span>
            </div>
            <input
              type="submit"
              value="Enviar"
              className="wpcf7-form-control wpcf7-submit"
            />
            <span className="ajax-loader"></span>
          </form>
        </div>
      </div>
      <div className="footer__copyright">
        Copyright © 2024 Instituto Santa Ana, todos los derechos reservados.
      </div>
    </div>
  );
}

export default Footer;
