import React from 'react'
import EntradaFoto from "./isaentrada.jpg"
import AulasDigitales from "./aulasdigitales.jpg"
import MusicaPic from "./musica.jpg"
import EducacionFisica from "./edfisica.jpg"
import CampamentosPic from "./campamentos.jpg"
import SalidasDidacticas from "./salidasdidacticas.jpg"
import PropuestasDidacticas from "./propuestasdidacticas.jpg"
import InglesPic from "./Ingles.jpg"

function PrincCarr() {
  return (
    <div className="container-fluid">
        <div id="carouselExampleCaptionsTop1" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="2" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="3" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="4" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="5" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="6" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide-to="7" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={EntradaFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Admisiones ciclo lectivo 2025</h5>
                <p className='text-shadow'>Consultá por nuestros cupos para todos los niveles y asegurá una educación de calidad para vos y para tus hijos.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={AulasDigitales} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Aulas digitalizadas</h5>
                <p className='text-shadow'>Una experiencia educativa moderna y dinámica gracias a nuestras aulas equipadas con tecnología.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={MusicaPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Música</h5>
                <p className='text-shadow'>Actos musicales emocionantes. Cultivamos el talento y la creatividad de nuestros estudiantes.</p>
              </div>
            </div>  
            <div className="carousel-item">
              <img src={EducacionFisica} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Educación Física</h5>
                <p className='text-shadow'>Nuestros programas deportivos ofrecen una experiencia enriquecedora que promueve el bienestar físico y mental de todos los alumnos.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={CampamentosPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Campamentos</h5>
                <p className='text-shadow'>Se desarrollan habilidades de liderazgo, trabajo en equipo y resiliencia, creando recuerdos inolvidables mientras exploran el mundo que los rodea.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={SalidasDidacticas} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Salidas didácticas</h5>
                <p className='text-shadow'>Exploramos el mundo real, enriqueciendo el aprendizaje con experiencias prácticas y contextuales visitando desde museos hasta empresas locales.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={PropuestasDidacticas} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Propuestas didácticas</h5>
                <p className='text-shadow'>Despertamos la curiosidad y el compromiso de nuestros estudiantes. Desde proyectos de investigación hasta simulaciones interactivas.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={InglesPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Inglés</h5>
                <p className='text-shadow'>Preparamos a los estudiantes para los exámenes internacionales de Cambridge en inglés, garantizando un sólido dominio del idioma para el éxito global.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsTop1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
  )
}

export default PrincCarr