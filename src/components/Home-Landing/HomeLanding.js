import React from 'react';
import EntradaFoto from "./isaentrada.jpg"
import AulasDigitales from "./aulasdigitales.jpg"
import ActoFoto from "./actofoto.png"
import MusicaPic from "./musica.jpg"
import EducacionFisica from "./edfisica.jpg"
import CampamentosPic from "./campamentos.jpg"
import SalidasDidacticas from "./salidasdidacticas.jpg"
import PropuestasDidacticas from "./propuestasdidacticas.jpg"
import InglesPic from "./Ingles.jpg"
import SalonFoto from "./isasalon.jpg"
import InicialFoto from "./inicialpic.png"
import JardinFoto from "./jardinfoto.png"
import PrimarioFoto from "./primariopic.png"
import SecundarioFoto from "./secundariopic.png"
import ConferenciaFoto from "./conferenciafoto.png"
import TerciarioFoto from "./terciariofoto.png"
import ChicasTerciarioFoto from "./chicasterciariofoto.jpg"

import Tigre from "./tigre.png"
import Uflo from "./uflo.png"
import Cambridge from "./cambridge.png"
import Ipar from "./ipar.png"
import Cisco from "./cisco.png"
import BlasPascal from "./blaspascal.png"
import ConveniosFotos from "./conveniosfotos.png"

import "./HomeLanding.css"
import Footer from '../Footer/Footer';
import Swal from 'sweetalert2'

function HomeLanding() {

  const handleAdmisionesClick = () => {
    Swal.fire({
      icon: 'info',
      title: 'Disculpe las molestias',
      text: 'Página en construcción'
    });
  };

  return (
    <>
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
      <div className="container-fluid text-center barracolores">
        <div className="row">
          <div className="col azul"></div>
          <div className="col rojo"></div>
          <div className="col azul"></div>
          <div className="col rojo"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="carouselExampleCaptionsBottom1" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={InicialFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Inicial</h5>
                <p className='text-shadow'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
                <button type="button" className="btn custom-btn" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={JardinFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <p className='text-shadow'>Fomentamos la curiosidad, creatividad y habilidades sociales desde una edad temprana.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid text-center barracolores">
        <div className="row">
          <div className="col azul"></div>
          <div className="col rojo"></div>
          <div className="col azul"></div>
          <div className="col rojo"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="carouselExampleCaptionsBottom2" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={PrimarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Primario</h5>
                <p className='text-shadow'>Transformar las caracteristicas del niño actual en un individuo con conocimientos aplicables a la realidad.</p>
                <button type="button" className="btn custom-btn" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={SalonFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <p className='text-shadow'>Promovemos el desarrollo de habilidades fundamentales, el pensamiento crítico y el amor por el aprendizaje, preparando a los estudiantes para un futuro brillante.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid text-center barracolores">
        <div className="row">
          <div className="col azul"></div>
          <div className="col rojo"></div>
          <div className="col azul"></div>
          <div className="col rojo"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="carouselExampleCaptionsBottom3" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SecundarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Secundario</h5>
                <p className='text-shadow'>Formar alumnos libres, dinámicos, creativos, responsables, capaces de ser protagonistas y transformadores de la sociedad en la que viven.</p>
                <button type="button" className="btn custom-btn" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ConferenciaFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <p className='text-shadow'>Inspiramos a los estudiantes a alcanzar su máximo potencial académico y personal. Nuestro enfoque educativo robusto y diversificado promueve el pensamiento crítico, la responsabilidad y la preparación para los desafíos del mundo real.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid text-center barracolores">
        <div className="row">
          <div className="col azul"></div>
          <div className="col rojo"></div>
          <div className="col azul"></div>
          <div className="col rojo"></div>
        </div>
      </div>
      <div className="container-fluid">
        <div id="carouselExampleCaptionsBottom4" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom4" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={TerciarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center center'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Terciario</h5>
                <p className='text-shadow'>Formar docentes capacitados para que se desempeñen en Educación Primaria y Educación Inicial sobre la base de los fundamentos filosóficos, psico- pedagógicos y ético- profesionales.</p>
                <button type="button" className="btn custom-btn" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={ChicasTerciarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <p className='text-shadow'>Ofrecemos una formación integral y especializada para futuros educadores. Nuestro enfoque se centra en el desarrollo de habilidades pedagógicas sólidas, la experiencia práctica en el aula y el compromiso con la excelencia educativa.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsBottom4" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsBottom4" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container text-center">
        <p class="fs-3 items-desc titleinicial items-desc text-center">Convenios con otras instituciones</p>
        <hr className='divisor'/>
        <div class="container text-center">
          <img className='img-fluid img-conv' src={ConveniosFotos}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomeLanding;
