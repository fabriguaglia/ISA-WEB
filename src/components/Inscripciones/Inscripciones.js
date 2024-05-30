import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import PrincCarr from '../../assets/PrincCarr/PrincCarr';
import BarraColores from '../../assets/BarraColores'
import Footer from '../Footer/Footer';

function Inscripciones() {
  const [formValues, setFormValues] = useState({
    cantidadAdultos: 1,
    nombreMadre: '',
    apellidoMadre: '',
    documentoMadre: '',
    correoContacto: '',
    anoIngreso: '',
    cantidadIngresantes: '',
    nombreIngresante: '',
    nivelEducacion: 'Nivel Inicial',
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
    if (formValues.nivelEducacion === 'Nivel Inicial') {
      serviceId = 'service_c3hj18p';
      templateId = 'template_oppp37m';
      publicKey = '0KNLAuH-ohC7XC6QO';
    } else if (formValues.nivelEducacion === 'Nivel primario') {
      serviceId = 'service_mbx8omp';
      templateId = '0KNLAuH-ohC7XC6QO';
      publicKey = '0KNLAuH-ohC7XC6QO'; // Reemplaza con la clave pública correspondiente
    } else if (formValues.nivelEducacion === 'Nivel secundario') {
      serviceId = 'service_fp74y9r';
      templateId = 'template_obq7uuv';
      publicKey = 'WCqy7SlmWtNThK1AY'; // Reemplaza con la clave pública correspondiente
    } else if (formValues.nivelEducacion === 'Nivel terciario') {
      serviceId = 'service_e7hwkil';
      templateId = 'template_owhk5vd';
      publicKey = '9bOLSf2YQActFeOGW'; // Reemplaza con la clave pública correspondiente
    }

    const templateParams = {
      ...formValues,
    };

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
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
    <BarraColores/>
      <div className="container mt-3">
        <h1 className='text-center'>Inscripciones</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombreMadre" className="form-label">Nombre Madre/Padre/Tutor  </label>
            <input type="text" className="form-control" id="nombreMadre" name="user_nametutor"  required />
          </div>

          <div className="mb-3">
            <label htmlFor="apellidoMadre" className="form-label">Apellido Madre/Padre/Tutor  </label>
            <input type="text" className="form-control" id="apellidoMadre" name="user_apellido"  required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">CUIL del Padre/Madre/Tutor</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
          <div className="mb-3">
            <label htmlFor="correoContacto" className="form-label">Correo electrónico de contacto </label>
            <input type="email" className="form-control" id="correoContacto" name="user_mail" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Telefono</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
         
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Direccion del Responsable</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Nombre y apellido del alumno</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">DNI del alumno</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Colegio del que proviene</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
        
        
          <div className="mb-3">
            <label htmlFor="nivelEducacion" className="form-label">Nivel de Educación </label>
            <select className="form-select" id="nivelEducacion" name="nivelEducacion" value={formValues.nivelEducacion} onChange={handleChange} required>
              <option value="Nivel Inicial">Nivel Inicial</option>
              <option value="Nivel primario">Nivel primario</option>
              <option value="Nivel secundario">Nivel secundario</option>
              <option value="Nivel terciario">Nivel terciario</option>
            </select>
<br></br>
<div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Curso al que quiere ingresar</label>
            <input type="text" className="form-control" id="nombreIngresante" name="user_nymingresante" required />
          </div>
            <div className="mb-3">
            <label htmlFor="nivelEducacion" className="form-label">Año de ingreso </label>
            <select className="form-select" id="nivelEducacion" name="nivelEducacion" value={formValues.nivelEducacion} onChange={handleChange} required>
              <option value="Nivel Inicial">2025</option>
              <option value="Nivel primario">2026</option>
              <option value="Nivel secundario">2027</option>
              <option value="Nivel terciario">2028</option>
              <option value="Nivel terciario">2029</option>
            </select>
      
          </div>
          </div>
      
       
          <button type="submit" className="btn custom-btn mb-3">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Inscripciones;