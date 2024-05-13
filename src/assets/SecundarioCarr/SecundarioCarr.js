import React from 'react'
import SecundarioFoto from "./secundariopic.png"
import ConferenciaFoto from "./Secundariopicc.jpeg"

function SecundarioCarr() {
  return (
    <div className="container-fluid p-0">
        <div id="carouselExampleCaptionsBottom3" className="carousel slide" style={{width: "100%"}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptionsBottom3" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={SecundarioFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 35%'}} />
              <div className="carousel-caption">
                <h5 className='text-shadow fs-1'>Nivel Secundario</h5>
                <p className='text-shadow'>Formar alumnos libres, dinámicos, creativos, responsables, capaces de ser protagonistas y transformadores de la sociedad en la que viven.</p>
                <a href='/secundario'><button type="button" className="btn custom-btn">Más información</button></a>  
                <a href='/inscripciones'><button type="button" className="btn custom-btn ms-2">Admisiones</button></a>            
              </div>
            </div>
            <div className="carousel-item">
              <img src={ConferenciaFoto} className="d-block carousel-img" alt="..." style={{objectPosition: 'center 60%'}} />
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
  )
}

export default SecundarioCarr