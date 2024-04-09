import React from 'react';
import './Contact.css'; 

function Contact() {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <br />
            <h4>Contactanos</h4>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="nombre"></label>
                <input type="text" id="nombre" name="nombre" placeholder="Nombre Completo" required />
              </div>
              <div className="form-group">
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje"></label>
                <textarea id="mensaje" name="mensaje" placeholder="Mensaje" rows="5" required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="linea-vertical"></div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
