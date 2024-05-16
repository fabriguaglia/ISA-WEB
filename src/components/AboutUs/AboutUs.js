import React from 'react'
import Footer from '../Footer/Footer'
import "./AboutUs.css"

import BarraColores from '../../assets/BarraColores'

import IsaEntradaFoto from "./isaentrada.jpg"
import IsaFotoVieja from "./IsaFotoVieja.jpg"
import IsaPanoramFoto from "./IsaPanoramFoto.jpg"
import ImagenCorteEscuela from "./imgcorteescuela.jpg"
import ImagenCorteEscuela2 from "./imgcorteescuela2.jpg"

function AboutUs() {
  return (
    <>  
        <BarraColores />
        <div className="container-fluid p-0">
            <div id="carouselExampleCaptionsBottom1" className="carousel slide" style={{ width: "100%" }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptionsBottom1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={IsaEntradaFoto} className="d-block carousel-img" alt="Foto Nivel Inicial" style={{objectPosition: 'center center'}}/>
                        <div className="carousel-caption mb-5">
                            <h5 className='text-shadow fs-1 my-5 mb-5'>Sobre Nosotros</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={IsaFotoVieja} className="d-block carousel-img" alt="Foto Jardín" style={{objectPosition: 'center 20%'}}/>
                        <div className="carousel-caption">
                            <p className='text-shadow bg-dark bg-gradient bg-opacity-75'>Fomentamos la curiosidad, creatividad y habilidades sociales desde una edad temprana.</p>
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
        <BarraColores />
        <div className="container text-center">
          <p className="fs-3 items-desc titleinicial items-desc text-center">Nuestra historia</p>
          <hr className='divisor'/>
          <div className="row"><div class="row text-center">
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>El Instituto Santa Ana fue fundado en 1980 por la señora Rosa Yoma, docente de las Islas del Delta y capacitadora en la Enseñanza de Gestión Pública.</p>
                    </div>
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>El motivo de su creación fue la necesidad de formar un establecimiento que pudiera contener y educar socialmente a los niños de la zona. Y es por eso que su nombre se debe a quien fue la abuela de Jesucristo, también conocida como la protectora de los niños, Santa Ana.</p>
                    </div>
                </div>
            </div>
        </div>
        <BarraColores />
            <div className='row vertical-center-row'>
                <img src={IsaPanoramFoto} className="img-fluid" alt="Foto Panorámica"/>  
            </div>
        <BarraColores/>
        <div className="container text-center">
            <div className="row">
                <div class="row text-center">
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>Con mucho esfuerzo y dedicación, la señora Yoma y sus colegas lograron formar una de las instituciones educativas más completas del Partido de Tigre.</p>
                    </div>
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>Hoy en día, el Santa Ana cuenta con enseñanza de todos los niveles: Jardín, Primario, Secundario, Terciario con Profesorado de Educación Inicial y Primaria y, recientemente, con nivel universitario, como centro de extensión de la Universidad Blas Pascal en Zona Norte.</p>
                    </div>
                </div>
            </div>
        </div>
            <div className="container text-center">
            <p className="fs-3 items-desc titleinicial items-desc text-center">Objetivos</p>
            <hr className='divisor'/>
            <div class="row row-cols-2 text-center">
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>Promover la comprensión del ser humano y del mundo actual desde una mirada interdisciplinaria completa.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>Educar con sentido de justicia y libertad, promoviendo la solidaridad y el compromiso social.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
                            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
                        </svg>
                        <p className='items-desc'>Desarrollar una relación armoniosa entre el individuo y la comunidad. </p>
                    </div>
                    <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-chat-quote" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg>
                        <p className='items-desc'>Fomentar el amor por el conocimiento en todas sus formas.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
                        </svg>
                        <p className='items-desc'>Desenvolver el aprendizaje dentro de un marco científico, tecnológico e innovador.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
                        </svg>
                        <p className='items-desc'>Desarrollar y promover actividades culturales, deportivas, tecnológicas e innovadoras extra programáticas que formen parte de la currícula institucional.</p>
                    </div>
                </div>
            </div>
                <div className='row vertical-center-row'>
                    <img src={ImagenCorteEscuela} className="img-fluid" alt="Foto Panorámica"/>
                </div>
            <div className="container text-center">
            <p className="fs-3 items-desc titleinicial items-desc text-center">Perfil del alumno</p>
            <hr className='divisor'/>
            <div class="row text-center">
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>Nuestro objetivo principal es desarrollar en cada alumno el deseo por estudiar y progresar día a día. Lograr formar alumnos que adquieran seguridad y decisión y que puedan descubrir su vocación. Alumnos que sepan expresar sus sentimientos ideas de la mejor manera, y utilizando el lenguaje y las herramientas correctas.</p>
                    </div>
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>Alumnos que se comprometan con la sociedad y que hagan de su entorno partes de sí mismos. Alumnos que se esfuercen en la educación y que la valoren. Alumnos que quieran y respeten al prójimo, y que se pongan al servicio de la comunidad. Alumnos capacitados profesionalmente y que sepan defender sus derechos y los derechos de los demás. Alumnos listos para enfrentar las adversidades y para hacer del mundo un lugar mejor.</p>
                    </div>
            </div>
            </div>
                <div className='row vertical-center-row'>
                    <img src={ImagenCorteEscuela2} className="img-fluid" alt="Foto Panorámica"/>
                </div>
            <div className="container text-center">
                <p className="fs-3 items-desc titleinicial items-desc text-center">¿Qué pretendemos?</p>
                <hr className='divisor'/>
                <div class="row text-center">
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>Lo que pretendemos en el Santa Ana es alcanzar un nivel académico de excelencia, a través del orden, la disciplina y el acompañamiento a cada uno de nuestros alumnos.</p>
                    </div>
                    <div class="items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>Pretendemos promover la interacción, la integración y la cohesión entre todos los niveles que forman nuestra institución, y, además, afianzar el clima de unión y de trabajo en equipo entre todos los miembros de la comunidad educativa.</p>
                    </div>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default AboutUs