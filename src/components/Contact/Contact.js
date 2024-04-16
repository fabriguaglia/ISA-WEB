import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como enviar una solicitud HTTP a un servidor

    // Marcar el formulario como enviado
    setFormSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
        <p class="fs-3 items-desc titleinicial items-desc text-center">Contactenos</p>
          <hr className='divisor'/>
          {formSubmitted ? (
            <p>¡Gracias! Su mensaje ha sido enviado correctamente.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingrese su nombre completo" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Ingrese su correo electrónico" required />
              </div>
              <div className="form-group">
                <label htmlFor="sector">Sector a consultar:</label>
                <select id="sector" name="sector" className="form-control" required>
                  <option value="">Seleccione un sector</option>
                  <option value="Administracion">Administración</option>
                  <option value="Nivel Inicial">Nivel Inicial</option>
                  <option value="Nivel Primario">Nivel Primario</option>
                  <option value="Nivel Secundario">Nivel Secundario</option>
                  <option value="Nivel Terciario-Profesorado">Nivel Terciario-Profesorado</option>
                  <option value="Nivel Universitario">Nivel Universitario</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje" className="form-control" placeholder="Escriba su mensaje aquí" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          )}
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h5>Enlaces útiles</h5>
          <ul>
            <li>Blog</li>
          </ul>
          <h5>Recursos adicionales</h5>
          <ul>
            <li>Preguntas frecuentes (FAQ)</li>
          </ul>
          <h5>Estado del sistema</h5>
          <p>Actualizado</p>
          <h5>Contactos</h5>
          <p>Correo electrónico: admin@santa-ana.edu.ar</p>
          <p>Teléfono: +54 11 4740 1994 / +54 11 4740 5981</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
