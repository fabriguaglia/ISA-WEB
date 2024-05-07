import React from 'react'
import Swal from 'sweetalert2'
import PrimarioFoto from "./PrimarioPicc.jpg"
import SalonFoto from "./isasalon.jpg"

function PrimarioCarr() {
    const handleAdmisionesClick = () => {
        Swal.fire({
          icon: 'info',
          title: 'Disculpe las molestias',
          text: 'Página en construcción'
        });
      };
  return (
    <div className="container-fluid p-0">
        <div id="carouselExampleCaptionsBottom2" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={PrimarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 40%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow'>Nivel Primario</h5>
                <p className='text-shadow'>Transformar las caracteristicas del niño actual en un individuo con conocimientos aplicables a la realidad.</p>
                <a href='/niveles'><button type="button" className="btn custom-btn">Ver niveles</button></a>               
                <button type="button" className="btn custom-btn ms-2" onClick={handleAdmisionesClick}>Admisiones</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={SalonFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 40%'}} />
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
  )
}

export default PrimarioCarr