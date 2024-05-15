import React from 'react'
import BarraColores from '../../../../assets/BarraColores'
import SecundarioCarr from '../../../../assets/SecundarioCarr/SecundarioCarr'
import Footer from '../../../Footer/Footer'

import Familiaicon from './FullFamily.png'
import CorteFoto from "./imagenescorte.jpg"
import FamiliaSuperpuestaIcon from "./peoplesuperpuesta.png"
import DiversityIcon from "./diveristyicon.png"
import HeartHandIcon from "./hearthandicon.png"
import FamilyQuestionIcon from "./familyquestionicon.png"
import VoiceIcon from "./VoiceIcon.png"
import ProcessIcon from "./ProcessIcon.png"
import CaduceusIcon from "./CaduceusIcon.png"
import PerfilAlumnoPic from "./perfilalumnopic.jpg"
import Modalidades from "./Modalidades.png"

import ImagenPasant from "./imagepasant.jpg"
import ImagenGrad from "./imagegrad.jpg"
import ImagenSala from "./imagesala.jpg"
import ImagePasantias from "./imagepasantias.png"

function Secundario() {
  return (
    <>
        <BarraColores />
    <SecundarioCarr />
        <BarraColores />
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Objetivos</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample6">
            <div class="card card-body">
            <div class="row row-cols-2 text-center">
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
        </svg>
        <p className='items-desc'>Nuestro accionar como educadores esta basado en la concepción del hombre como persona es por ello que nuestro propósito es formar alumnos libres, dinámicos, creativos, </p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        <p className='items-desc'>Personas responsables, capaces de ser protagonistas y transformadores de la sociedad en la que viven.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
        <p className='items-desc'>Capaces de vivir al servicio del bien común conformes a los valores de la moral, la tradición nacional y la dignidad de ser argentino.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
        </svg>
        <p className='items-desc'>Tendrán la capacidad de asimilar conocimientos de otras áreas del saber y si desean incorporarse en el mundo laboral tendrán la capacidad de aprender las constantes modificaciones que se introducen en todos los campos del quehacer humano.</p>
    </div>
  </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Perfil del Alumno</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample7">
            <div class="card card-body p-0 row text-center">
            <p className='items-desc'>Fomentando la innovación y el fortalecimiento de las prácticas exitosas. Esto se logra mediante una reflexión crítica de su propio desempeño y una disposición a colaborar con sus colegas, permitiendo así el crecimiento conjunto a través del intercambio de experiencias y el trabajo en equipo.</p>
            <img className='img-fluid' src={PerfilAlumnoPic} alt='...'/>
            <p className='items-desc'>Principalmente les enseñamos a aprender, ya que si quieren acceder a un estudio superior tendrán la capacidad de asimilar conocimientos de otras áreas del saber y si desean incorporarse en el mundo laboral tendrán la capacidad de aprender las constantes modificaciones que se introducen en todos los campos del quehacer humano.</p>
            </div>
        </div>
      </div>
      <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Modalidades</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
      <div class="collapse" id="collapseExample8">
            <div class="card card-body p-0">
                <div class="container text-center">
                <div class="row">
                    <div class="col d-none d-sm-none d-md-block">
                        <img className='img-fluid rounded' src={ImagenSala} alt='50'/>
                    </div>
                    <div class="col">
                        <p className='items-desc fw-bold fs-3'>Técnico en informática</p>
                        <p className='items-desc fs-4'>Cabe destacar que el 7º año de la escuela Secundaria Técnica constará de prácticas profesionalizantes o trabajo supervisado que se llevarán a cabo por medio de un proyecto que será presentado y llevado a cabo en empresas de la zona.</p>
                    </div>
                    <div class="col d-none d-sm-none d-md-block">
                        <img className='img-fluid rounded' src={ImagePasantias} alt='50'/>
                    </div>
                </div>
                    <div class="row row-cols-2 text-center">
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                            </svg>
                            <p className='items-desc'>Está constituida por dos ciclos, siendo el primero de ellos Básicos, de tres años de duración y orientado a cada una de las especialidades y el ciclo superior con Formacion Tecnico Específico con una duración de 4 años.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                            <p className='items-desc'>El alumno obtiene un título de finalización de estudios secundarios en el sexto año, y acreditando al finalizar el título de Técnico en Informática Personal y Profesional.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                            </svg>
                            <p className='items-desc'>Con prácticas profesionalizantes que garantizen la articulación teórica práctica en los procesos formativos y el acercamiento de los estudiantes a situaciones vinculadas al mundo del trabajo y la producción.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
                                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
                            </svg>
                            <p className='items-desc'>Incorpora saberes científicos actualizados como parte como parte del acceso a la producción de conocimiento social y culturalmente valorado.</p>
                        </div>
                    </div>
                    <a href='inscripciones'><button type="button" className="btn custom-btn ms-2">Admisiones</button></a>
                    <hr className='divisor'/>
                    <div class="row">
                    <div class="col d-none d-sm-none d-md-block">
                        <img className='img-fluid rounded ' src={ImagenPasant} alt='50'/>
                    </div>
                    <div class="col">
                        <p className='items-desc fw-bold fs-3'>Bachiller en Comunicación</p>
                        <p className='items-desc fs-4'>Está pensada como una apertura e introducción al campo social tomando al hombre creativo como emergente de una realidad histórica, social y cultural.</p>
                    </div>
                    <div class="col d-none d-sm-none d-md-block">
                        <img className='img-fluid rounded ' src={ImagenGrad} alt='50'/>
                    </div>
                </div>
                    <div class="row row-cols-2 text-center">
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                            </svg>
                            <p className='items-desc'>Permitirá crear un lugar donde enseñar y aprender temáticas vinculadas a la comunicación en general y a los medios en particular.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                            </svg>
                            <p className='items-desc'>Las distintas dimensiones que forman parte de este campo son: la comunicación interpersonal, intercultural, comunitaria e institucional y la comunicación masiva.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
                                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
                            </svg>
                            <p className='items-desc'>Desarrollar habilidades sociales para el trabajo: capacidad de escucha, diálogo y trabajo en equipo, respeto a la diversidad cultural, participación en actividades cooperativas, entre otras.</p>
                        </div>
                        <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
                                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
                            </svg>
                            <p className='items-desc'>Además, permite una excelente inserción dentro del campo universitario, en especial en aquellas carreras de sesgo humanístico.</p>
                        </div>
                    </div>
                    <a href='inscripciones'><button type="button" className="btn custom-btn ms-2 mb-3">Admisiones</button></a>
                </div>
            </div>
        </div>
        <Footer />
    </>
)
}

export default Secundario