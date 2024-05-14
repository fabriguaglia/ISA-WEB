import React from 'react';
import InicialPic from "./JardinPic.jpg"
import JardinFoto from './InicialPicc.jpg';
import "./InicialCarr.css"

function InicialCarr() {

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
                        <div className="carousel-caption ">
                            <h5 className='text-shadow fs-1'>Nivel Inicial</h5>
                            <p className='text-shadow bg-dark bg-gradient bg-opacity-75'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
                            <a href='/jardin'><button type="button" className="btn custom-btn">Más información</button></a>               
                            <a href='/inscripciones'><button type="button" className="btn custom-btn ms-2">Admisiones</button></a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={JardinFoto} className="d-block carousel-img" alt="Foto Jardín" style={{objectPosition: 'center 20%'}}/>
                        <div className="carousel-caption carousel-caption-bottom">
                                <p className='text-shadow fs-5 bg-dark bg-gradient bg-opacity-75'>Fomentamos la curiosidad, creatividad y habilidades sociales desde una edad temprana.</p>
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
