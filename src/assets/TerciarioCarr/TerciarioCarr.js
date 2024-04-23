import React from 'react'
import Swal from 'sweetalert2'
import TerciarioFoto from "./terciariofoto.png"
import ChicasTerciarioFoto from "./chicasterciariofoto.jpg"

function TerciarioCarr() {
    const handleAdmisionesClick = () => {
        Swal.fire({
          icon: 'info',
          title: 'Disculpe las molestias',
          text: 'Página en construcción'
        });
      };
  return (
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
  )
}

export default TerciarioCarr