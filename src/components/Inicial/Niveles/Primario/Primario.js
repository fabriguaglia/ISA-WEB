import React from 'react'
import BarraColores from '../../../../assets/BarraColores'
import PrimarioCarr from '../../../../assets/PrimarioCarr/PrimarioCarr'
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

function Primario() {
  return (
    <>
      <div>
       
        <BarraColores />
            <PrimarioCarr />
        <BarraColores/>

        <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Objetivos</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample3">
            <div class="card card-body">
            <div class="row row-cols-2 text-center">
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
        </svg>
        <p className='items-desc'>Lograr nivel académico, orden y disciplina.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
        </svg>
        <p className='items-desc'>Asegurar el clima de unión, de coerción y de esperanza entre todos los miembros de la comunidad educativa.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
            </svg>
        <p className='items-desc'>Mejorar la calidad educativa.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
            </svg>
        <p className='items-desc'>Fomentar el espíritu crítico frente a los distintos campos del conocimiento.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-balloon-heart" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063q.068.062.132.129.065-.067.132-.129c3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3 3 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398"/>
            </svg>
        <p className='items-desc'>Fortalecer los valores éticos y morales.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5m-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5"/>
            </svg>
        <p className='items-desc'>Actualizar el saber para comprender los cambios actuales.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                <path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/>
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
            </svg>
        <p className='items-desc'>Descubrir las necesidades comunitarias a través de encuestas anónimas.</p>
    </div>
    <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-book-half" viewBox="0 0 16 16">
                <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
            </svg>
        <p className='items-desc'>Generar atracción al estudio y a la investigación.</p>
    </div>
  </div>
            </div>
        </div>
      </div>

      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Perfil del Alumno</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample4">
            <div class="card card-body p-0">
                <img className='img-fluid' src={PerfilAlumnoPic} alt='...'/>
            </div>
        </div>
      </div>

      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Propuesta de Proyecto Educativo</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample5">
            <div class="card card-body">
                <div class="row row-cols-2 text-center">
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                            <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
                            <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
                        </svg>
                        <p className='items-desc'>El nivel primario de nuestra Institución se enfoca en educar con sentido de justicia y libertad, promoviendo la solidaridad y el compromiso social.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </svg>
                        <p className='items-desc'>Buscamos desarrollar una relación armoniosa entre el individuo y la comunidad, fomentando su papel como agentes de cambio responsables en un marco de libertad.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
                            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
                        </svg>
                        <p className='items-desc'>Priorizamos una educación humanizante, promoviendo la reflexión constante y el amor por el conocimiento científico y tecnológico para contribuir a un mundo mejor. </p>
                    </div>
                    <div class="col items-niveles">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-chat-quote" viewBox="0 0 16 16">
                                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                                <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
                            </svg>
                        <p className='items-desc'>Facilitamos espacios de comunicación para que todos los miembros de la comunidad educativa puedan enriquecerse mutuamente.</p>
                    </div>
                    <div class="col items-niveles">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
                            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
                        </svg>
                        <p className='items-desc'>Ofrecemos actividades culturales, deportivas, científicas y tecnológicas como parte integral de nuestra currícula institucional.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Primario