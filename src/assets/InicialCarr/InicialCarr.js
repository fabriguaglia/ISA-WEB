import React from 'react';
import Swal from 'sweetalert2';
import InicialPic from "./JardinPic.jpg"
import JardinFoto from './InicialPicc.jpg';

function InicialCarr() {
    const handleAdmisionesClick = () => {
        Swal.fire({
            icon: 'info',
            title: 'Disculpe las molestias',
            text: 'Página en construcción'
        })
    };

    return (
        <div className="container-fluid p-0">
            <div id="carouselExampleCaptionsBottom1" className="carousel slide" style={{ width: "100%" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={InicialPic} className="d-block carousel-img" alt="Foto Nivel Inicial" style={{objectPosition: 'center center'}}/>
                        <div className="carousel-caption">
                            <h5 className='text-shadow'>Nivel Inicial</h5>
                            <p className='text-shadow'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
                            <a href='/niveles'><button type="button" className="btn custom-btn">Ver niveles</button></a>               
                            <button type="button" className="btn custom-btn ms-2" onClick={handleAdmisionesClick}>Admisiones</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={JardinFoto} className="d-block carousel-img" alt="Foto Jardín" style={{objectPosition: 'center 20%'}}/>
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
    );
}

export default InicialCarr;
