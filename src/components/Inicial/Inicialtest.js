import React from 'react'
import Swal from 'sweetalert2'

import InicialFoto from './inicialpic.png'
import JardinFoto from './jardinfoto.png'

function Inicialtest() {

    const handleAdmisionesClick = () => {
        Swal.fire({
          icon: 'info',
          title: 'Disculpe las molestias',
          text: 'Página en construcción'
        });
      };

  return (
    <>
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
        <p class="d-inline-flex gap-1">
            <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Objetivos
            </button>
        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
            </div>
        </div>
    </>
  )
}

export default Inicialtest