import React from 'react';

function Inscripciones() {
  return (
    <div className="container mt-5">
      <form>
        <div className="mb-3">
          <label htmlFor="cantidadAdultos" className="form-label">Cantidad de adultos responsables *</label>
          <input type="number" className="form-control" id="cantidadAdultos" required />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreMadre" className="form-label">Nombre Madre/Tutor 1 *</label>
          <input type="text" className="form-control" id="nombreMadre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="apellidoMadre" className="form-label">Apellido Madre/Tutor 1 *</label>
          <input type="text" className="form-control" id="apellidoMadre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="documentoMadre" className="form-label">N° Documento Madre/Tutor 1 *</label>
          <input type="text" className="form-control" id="documentoMadre" required />
        </div>
        <div className="mb-3">
          <label htmlFor="correoContacto" className="form-label">Correo electrónico de contacto *</label>
          <input type="email" className="form-control" id="correoContacto" required />
        </div>
        <div className="mb-3">
          <label htmlFor="anoIngreso" className="form-label">Año de ingreso *</label>
          <input type="number" className="form-control" id="anoIngreso" required />
        </div>
        <div className="mb-3">
          <label htmlFor="cantidadIngresantes" className="form-label">Cantidad de ingresantes *</label>
          <input type="number" className="form-control" id="cantidadIngresantes" required />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreIngresante" className="form-label">Ingresante 1 *</label>
          <input type="text" className="form-control" id="nombreIngresante" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Inscripciones;
