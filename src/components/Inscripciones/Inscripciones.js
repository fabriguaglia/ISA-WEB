import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PrincCarr from '../../assets/PrincCarr/PrincCarr';
import BarraColores from '../../assets/BarraColores';
import Footer from '../Footer/Footer';

function Inscripciones() {
  const [formValues, setFormValues] = useState({
    nombreMadre: '',
    apellidoMadre: '',
    documentoMadre: '',
    correoContacto: '',
    telefono: '',
    direccionResponsable: '',
    nombreIngresante: '',
    dniAlumno: '',
    colegioProviene: '',
    nivelEducacion: 'Nivel Inicial',
    cursoIngreso: '',
    añoIngreso: '2025',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let serviceId, templateId, publicKey;

    // Configurar serviceId, templateId y publicKey según el nivel de educación seleccionado
    switch (formValues.nivelEducacion) {
      case 'Nivel Inicial':
        serviceId = 'service_qyhe1px';
        templateId = 'template_216xyx3';
        publicKey = 'WCqy7SlmWtNThK1AY';
        break;
      case 'Nivel primario':
        serviceId = 'service_agf1n1s';
        templateId = 'template_y2wpfij';
        publicKey = '9bOLSf2YQActFeOGW'; // Ajusta con la clave pública correspondiente
        break;
      case 'Nivel secundario':
        serviceId = 'service_fp74y9r';
        templateId = 'template_obq7uuv';
        publicKey = 'WCqy7SlmWtNThK1AY'; // Ajusta con la clave pública correspondiente
        break;
      case 'Nivel terciario':
        serviceId = 'service_e7hwkil';
        templateId = 'template_owhk5vd';
        publicKey = '9bOLSf2YQActFeOGW'; // Ajusta con la clave pública correspondiente
        break;
      default:
        return;
    }

    const templateParams = {
      ...formValues,
    };

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then((response) => {
        console.log('Correo enviado con éxito!', response);
        // Aquí podrías mostrar un mensaje de éxito o redirigir a una página de confirmación
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        // Aquí podrías manejar el error de alguna manera, como mostrar un mensaje al usuario
      });
  };

  return (
    <>
      <BarraColores />
      <PrincCarr />
      <BarraColores />
      <div className="container mt-3">
        <h1 className='text-center'>Inscripciones</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombreMadre" className="form-label">
              Nombre Madre/Padre/Tutor
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreMadre"
              name="nombreMadre"
              value={formValues.nombreMadre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="apellidoMadre" className="form-label">
              Apellido Madre/Padre/Tutor
            </label>
            <input
              type="text"
              className="form-control"
              id="apellidoMadre"
              name="apellidoMadre"
              value={formValues.apellidoMadre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="documentoMadre" className="form-label">
              CUIL del Padre/Madre/Tutor
            </label>
            <input
              type="text"
              className="form-control"
              id="documentoMadre"
              name="documentoMadre"
              value={formValues.documentoMadre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="correoContacto" className="form-label">
              Correo electrónico de contacto
            </label>
            <input
              type="email"
              className="form-control"
              id="correoContacto"
              name="correoContacto"
              value={formValues.correoContacto}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              value={formValues.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="direccionResponsable" className="form-label">
              Dirección del Responsable
            </label>
            <input
              type="text"
              className="form-control"
              id="direccionResponsable"
              name="direccionResponsable"
              value={formValues.direccionResponsable}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">
              Nombre y apellido del alumno
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreIngresante"
              name="nombreIngresante"
              value={formValues.nombreIngresante}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="dniAlumno" className="form-label">
              DNI del alumno
            </label>
            <input
              type="text"
              className="form-control"
              id="dniAlumno"
              name="dniAlumno"
              value={formValues.dniAlumno}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="colegioProviene" className="form-label">
              Colegio del que proviene
            </label>
            <input
              type="text"
              className="form-control"
              id="colegioProviene"
              name="colegioProviene"
              value={formValues.colegioProviene}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="nivelEducacion" className="form-label">
              Nivel de Educación
            </label>
            <select
              className="form-select"
              id="nivelEducacion"
              name="nivelEducacion"
              value={formValues.nivelEducacion}
              onChange={handleChange}
              required
            >
              <option value="Nivel Inicial">Nivel Inicial</option>
              <option value="Nivel primario">Nivel primario</option>
              <option value="Nivel secundario">Nivel secundario</option>
              <option value="Nivel terciario">Nivel terciario</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="cursoIngreso" className="form-label">
              Curso al que quiere ingresar
            </label>
            <input
              type="text"
              className="form-control"
              id="cursoIngreso"
              name="cursoIngreso"
              value={formValues.cursoIngreso}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="añoIngreso" className="form-label">
              Año de ingreso
            </label>
            <select
              className="form-select"
              id="añoIngreso"
              name="añoIngreso"
              value={formValues.añoIngreso}
              onChange={handleChange}
              required
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>

          <button type="submit" className="btn custom-btn mb-3">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Inscripciones;
