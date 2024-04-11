import React from 'react';
import EntradaFoto from "./isaentrada.jpg"
import ActoFoto from "./actofoto.png"
import SalonFoto from "./isasalon.jpg"
import InicialFoto from "./inicialpic.png"
import JardinFoto from "./jardinfoto.png"
import PrimarioFoto from "./primariopic.png"
import SecundarioFoto from "./secundariopic.png"
import ConferenciaFoto from "./conferenciafoto.png"
import TerciarioFoto from "./terciariofoto.png"
import ChicasTerciarioFoto from "./chicasterciariofoto.jpg"

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
              <img src={ActoFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center top'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
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
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
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
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
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
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
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
                <h5 className='text-shadow'>Second slide label</h5>
                <p className='text-shadow'>Some representative placeholder content for the second slide.</p>
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
      <Footer />
    </>
  );
}

export default HomeLanding;
