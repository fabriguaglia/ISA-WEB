import React from 'react'
import Swal from 'sweetalert2'
import EntradaFoto from "./isaentrada.jpg"
import AulasDigitales from "./aulasdigitales.jpg"
import MusicaPic from "./musica.jpg"
import EducacionFisica from "./edfisica.jpg"
import CampamentosPic from "./campamentos.jpg"
import SalidasDidacticas from "./SalidasDidacticas.png"
import PropuestasDidacticas from "./propuestasdidacticas.jpg"
import InglesPic from "./Ingles.jpg"

function PrincCarr() {
  return (
    <div className="container-fluid p-0">
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
              <img src={EntradaFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 40%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow fs-2'>Admisiones ciclo lectivo 2025</h5>
                <p className='text-shadow bg-dark bg-gradient bg-opacity-75'>Consultá por nuestros cupos para todos los niveles y asegurá una educación de calidad para vos y para tus hijos.</p>
                  <button type="button" className="btn custom-btn">
                  <div class="dropdown p-0 m-0">
                  <a class="custom-btn dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Niveles
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/jardin">Inicial</a></li>
                    <li><a class="dropdown-item" href="/primario">Primario</a></li>
                    <li><a class="dropdown-item" href="/secundario">Secundario</a></li>
                    <li><a class="dropdown-item" href="/terciario">Terciario</a></li>
                  </ul>
                </div>
                  </button>           
                <a href='/inscripciones'><button type="button" className="btn custom-btn ms-2">Admisiones</button></a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={AulasDigitales} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 20%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Aulas digitalizadas</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Una experiencia educativa moderna y dinámica gracias a nuestras aulas equipadas con tecnología.</p>
              </div>
            </div>
            <div className="carousel-item">
                <img src={MusicaPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 35%'}} />
                <div className="carousel-caption">
                    <h5 className='text-shadow'>Música</h5>
                    <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Actos musicales emocionantes. Cultivamos el talento y la creatividad de nuestros estudiantes.</p>
                </div>
            </div>
            <div className="carousel-item">
              <img src={EducacionFisica} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 30%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Educación Física</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Nuestros programas deportivos ofrecen una experiencia enriquecedora que promueve el bienestar físico y mental de todos los alumnos.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={CampamentosPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 25%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Campamentos</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Se desarrollan habilidades de liderazgo, trabajo en equipo y resiliencia, creando recuerdos inolvidables mientras exploran el mundo que los rodea.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={SalidasDidacticas} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 30%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Salidas didácticas</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Exploramos el mundo real, enriqueciendo el aprendizaje con experiencias prácticas y contextuales visitando desde museos hasta empresas locales.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={PropuestasDidacticas} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 50%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Propuestas didácticas</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Despertamos la curiosidad y el compromiso de nuestros estudiantes. Desde proyectos de investigación hasta simulaciones interactivas.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={InglesPic} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 70%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Inglés</h5>
                <p className='text-shadow  bg-dark bg-gradient bg-opacity-75'>Preparamos a los estudiantes para los exámenes internacionales de Cambridge en inglés, garantizando un sólido dominio del idioma para el éxito global.</p>
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