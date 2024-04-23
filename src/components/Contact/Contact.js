import React, { useState } from 'react';
import './Contact.css';
import Swal from 'sweetalert2';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como enviar una solicitud HTTP a un servidor

    // Marcar el formulario como enviado
    setFormSubmitted(true);
  };

  const handleAdmisionesClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'Disculpe las molestias',
      text: 'Página en construcción'
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="fs-3 items-desc titleinicial items-desc text-center" style={{ color: 'navy' }}>Contactenos</p>
          <hr className='divisor'/>
          {formSubmitted ? (
            <p>¡Gracias! Su mensaje ha sido enviado correctamente.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre" style={{ color: 'navy' }}>Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Ingrese su nombre completo" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{ color: 'navy' }}>Correo electrónico:</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="Ingrese su correo electrónico" required />
              </div>
              <div className="form-group">
                <label htmlFor="sector" style={{ color: 'navy' }}>Sector a consultar:</label>
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
                <label htmlFor="mensaje" style={{ color: 'navy' }}>Mensaje:</label>
                <textarea id="mensaje" name="mensaje" className="form-control" placeholder="Escriba su mensaje aquí" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
          )}
        </div>
        <div className="col-md-6 mt-4 mt-md-0">
          <h5 className='margen-enlaces'>Enlaces útiles</h5>
          <ul>
            <li><a onClick={handleAdmisionesClick} style={{ color: 'navy' }}>Blog</a></li>
          </ul>
          <h5>Recursos adicionales</h5>
          <ul>
            <li><a onClick={handleAdmisionesClick} style={{ color: 'navy' }}>Preguntas frecuentes (FAQ)</a></li>
          </ul>
          <h5 className="mb-3">Estado del sistema</h5>
          <div className="d-flex align-items-center">
            <p className="mb-0">Actualizado</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="green" className="bi bi-check2 ml-2" viewBox="0 0 16 16">
              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
            </svg>
          </div>
          <h5 className="mt-4">Contactos</h5>
          <p>Correo electrónico: <a href='mailto:admin@santa-ana.edu.ar' style={{ color: 'navy' }}>admin@santa-ana.edu.ar</a></p>
          <p>Teléfono: <span style={{ color: 'navy' }}>+54 11 4740 1994 / +54 11 4740 5981</span></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
