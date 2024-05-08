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
      serviceId = 'service_qyhe1px';
      templateId = 'template_216xyx3';
      publicKey = 'WCqy7SlmWtNThK1AY';
    } else if (formValues.nivelEducacion === 'Nivel primario') {
      serviceId = 'service_agf1n1s';
      templateId = 'template_y2wpfij';
      publicKey = '9bOLSf2YQActFeOGW'; // Reemplaza con la clave pública correspondiente
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
            <label htmlFor="nombreMadre" className="form-label">Nombre Madre/Tutor  </label>
            <input type="text" className="form-control" id="nombreMadre" name="user_nametutor"  required />
          </div>
          <div className="mb-3">
            <label htmlFor="apellidoMadre" className="form-label">Apellido Madre/Tutor  </label>
            <input type="text" className="form-control" id="apellidoMadre" name="user_apellido"  required />
          </div>
          <div className="mb-3">
            <label htmlFor="documentoMadre" className="form-label">N° Documento Madre/Tutor  </label>
            <input type="text" className="form-control" id="documentoMadre" name="user_documento" required />
          </div>
          <div className="mb-3">
            <label htmlFor="correoContacto" className="form-label">Correo electrónico de contacto </label>
            <input type="email" className="form-control" id="correoContacto" name="user_mail" required />
          </div>
          <div className="mb-3">
            <label htmlFor="anoIngreso" className="form-label">Año de ingreso </label>
            <input type="number" className="form-control" id="anoIngreso" name="user_ingreso" required />
          </div>
          <div className="mb-3">
            <label htmlFor="cantidadIngresantes" className="form-label">Cantidad de ingresantes </label>
            <input type="number" className="form-control" id="cantidadIngresantes" name="user_icantidad" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nombreIngresante" className="form-label">Nombre y apellido del ingresante</label>
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
          </div>
          <button type="submit" className="btn custom-btn mb-3">Enviar</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Inscripciones;