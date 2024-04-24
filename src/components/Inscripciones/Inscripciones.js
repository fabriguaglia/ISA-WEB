import React from 'react';
import PrincCarr from '../../assets/PrincCarr/PrincCarr';
import BarraColores from '../../assets/BarraColores'; // Added semicolon


function Inscripciones() {
  return (
    <>
     <BarraColores />
    <PrincCarr />
    <BarraColores/>
      <div className="container mt-5">
        <h1>Inscripciones</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="cantidadAdultos" className="form-label">Cantidad de adultos responsables </label>
            <select className="form-select" id="cantidadAdultos" required>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="nombreMadre" className="form-label">Nombre Madre/Tutor 1 </label>
            <input type="text" className="form-control" id="nombreMadre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoMadre" className="form-label">Apellido Madre/Tutor 1 *</label>
            <input type="text" className="form-control" id="apellidoMadre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="documentoMadre" className="form-label">N° Documento Madre/Tutor 1 </label>
            <input type="text" className="form-control" id="documentoMadre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="correoContacto" className="form-label">Correo electrónico de contacto </label>
            <input type="email" className="form-control" id="correoContacto" required />
          </div>
          <div className="mb-3">
            <label htmlFor="anoIngreso" className="form-label">Año de ingreso *</label>
            <input type="number" className="form-control" id="anoIngreso" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cantidadIngresantes" className="form-label">Cantidad de ingresantes </label>
            <input type="number" className="form-control" id="cantidadIngresantes" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Nombre y apellido del ingresante</label>
            <input type="text" className="form-control" id="nombreIngresante" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nivelEducacion" className="form-label">Nivel de Educación </label>
            <select className="form-select" id="nivelEducacion" required>
              <option value="1">Nivel Inicial</option>
              <option value="2">Nivel primario</option>
              <option value="3">Nivel secundario</option>
              <option value="4">Nivel terciario</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    </>
  );
}

export default Inscripciones;
