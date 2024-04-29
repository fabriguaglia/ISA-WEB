import React from 'react'
import "./inicial.css"
import Footer from '../Footer/Footer';

import Familiaicon from './FullFamily.png'
import CorteFoto from "./imagenescorte.jpg"
import FamiliaSuperpuestaIcon from "./peoplesuperpuesta.png"
import DiversityIcon from "./diveristyicon.png"
import HeartHandIcon from "./hearthandicon.png"
import FamilyQuestionIcon from "./familyquestionicon.png"
import VoiceIcon from "./VoiceIcon.png"
import ProcessIcon from "./ProcessIcon.png"
import CaduceusIcon from "./CaduceusIcon.png"
import PerfilAlumnoPic from "./perfilalumnopic.png"

import BarraColores from '../../assets/BarraColores'
import InicialCarr from '../../assets/InicialCarr/InicialCarr.js'
import PrimarioCarr from '../../assets/PrimarioCarr/PrimarioCarr.js'
import SecundarioCarr from '../../assets/SecundarioCarr/SecundarioCarr.js'
import TerciarioCarr from '../../assets/TerciarioCarr/TerciarioCarr.js'

function Niveles() {

  return (
    <>
    <div>
        <BarraColores />
    <InicialCarr />
        <BarraColores />
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Objetivos</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
        <p className='items-desc'>Favorecer que la vida de la escuela se renueve permanentemente a partir de un continuo trabajo.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
        </svg>
        <p className='items-desc'>Educar con sentido de justicia y libertad que promueva la solidaridad y el compromiso social.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
        <p className='items-desc'>Estimular el afecto progresivo hacia los otros, desarrollando el sentido de equidad, de respeto a la libertad y a los criterios y valores ajenos.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
        </svg>
        <p className='items-desc'>Desarrollar actividades culturales, deportivas, científicas tecnológicas, extra programáticas que formen parte de la currícula institucional.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
        </svg>
        <p className='items-desc'>Valorizar la necesidad de profesionalizar en forma creciente la docencia.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
        </svg>
        <p className='items-desc'>Afianzar la identificación.</p>
    </div>
  </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Metas</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample1">
            <div class="card card-body">
            <div class="container text-center">
      <div className='row row-cols-2'>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
            </svg>
        <p className='items-desc'>Lograr una integración social que permita al alumno dirigir su conducta como protagonista del medio en que vive.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            </svg>
        <p className='items-desc'>Despertar permanentemente la curiosidad en los niños para que sean continuos descubridores de experiencia.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
            </svg>
        <p className='items-desc'>Ayudar a los niños a ir formándose como personas honestas, alegres, con capacidad de escucha y fieles defensores de su cultura.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={Familiaicon} alt='familiaicon'/>
        <p className='items-desc'>Permitir al total alumnado, familias y cuerpo docente crecer con la riqueza que permite la diferencia.</p>
        </div>
        </div>
        <img src={CorteFoto} className='img-fluid' alt='fotolinea'/>
      </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Modalidades</p>
            </button>
          <hr className='divisor'/>  
          </p>
          <div class="collapse" id="collapseExample2">
              <div class="card card-body">
              <div className='row row-cols-2 text-center'>
          <div class="col items-niveles">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                  <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
              </svg>
          <p className='items-desc'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamiliaSuperpuestaIcon} alt='familiaicon'/>
          <p className='items-desc'>Estimular hábitos de integración social, de convivencia grupal, de solidaridad y cooperación y de conservación del medio ambiente.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={DiversityIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={HeartHandIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamilyQuestionIcon} alt='familiaicon'/>
          <p className='items-desc'>Favorecer el desarrollo progresivo de la identidad, la autonomía y la pertenencia a la comunidad local.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={VoiceIcon} alt='familiaicon'/>
          <p className='items-desc'>Fomentar la comunicación, el diálogo y el respeto mutuo entre las familias y la institución.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={ProcessIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={CaduceusIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
          </div>
        </div>
            </div>
        </div>
      </div>
    </div>
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
    <div>
        <BarraColores />
    <SecundarioCarr />
        <BarraColores />
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Objetivos</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
        <p className='items-desc'>Favorecer que la vida de la escuela se renueve permanentemente a partir de un continuo trabajo.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
        </svg>
        <p className='items-desc'>Educar con sentido de justicia y libertad que promueva la solidaridad y el compromiso social.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
        <p className='items-desc'>Estimular el afecto progresivo hacia los otros, desarrollando el sentido de equidad, de respeto a la libertad y a los criterios y valores ajenos.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
        </svg>
        <p className='items-desc'>Desarrollar actividades culturales, deportivas, científicas tecnológicas, extra programáticas que formen parte de la currícula institucional.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
        </svg>
        <p className='items-desc'>Valorizar la necesidad de profesionalizar en forma creciente la docencia.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
        </svg>
        <p className='items-desc'>Afianzar la identificación.</p>
    </div>
  </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Metas</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample1">
            <div class="card card-body">
            <div class="container text-center">
      <div className='row row-cols-2'>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
            </svg>
        <p className='items-desc'>Lograr una integración social que permita al alumno dirigir su conducta como protagonista del medio en que vive.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            </svg>
        <p className='items-desc'>Despertar permanentemente la curiosidad en los niños para que sean continuos descubridores de experiencia.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
            </svg>
        <p className='items-desc'>Ayudar a los niños a ir formándose como personas honestas, alegres, con capacidad de escucha y fieles defensores de su cultura.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={Familiaicon} alt='familiaicon'/>
        <p className='items-desc'>Permitir al total alumnado, familias y cuerpo docente crecer con la riqueza que permite la diferencia.</p>
        </div>
        </div>
        <img src={CorteFoto} className='img-fluid' alt='fotolinea'/>
      </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Modalidades</p>
            </button>
          <hr className='divisor'/>  
          </p>
          <div class="collapse" id="collapseExample2">
              <div class="card card-body">
              <div className='row row-cols-2 text-center'>
          <div class="col items-niveles">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                  <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
              </svg>
          <p className='items-desc'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamiliaSuperpuestaIcon} alt='familiaicon'/>
          <p className='items-desc'>Estimular hábitos de integración social, de convivencia grupal, de solidaridad y cooperación y de conservación del medio ambiente.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={DiversityIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={HeartHandIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamilyQuestionIcon} alt='familiaicon'/>
          <p className='items-desc'>Favorecer el desarrollo progresivo de la identidad, la autonomía y la pertenencia a la comunidad local.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={VoiceIcon} alt='familiaicon'/>
          <p className='items-desc'>Fomentar la comunicación, el diálogo y el respeto mutuo entre las familias y la institución.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={ProcessIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={CaduceusIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
          </div>
        </div>
            </div>
        </div>
      </div>
    </div>
    <div>
        <BarraColores />
    <TerciarioCarr />
        <BarraColores />
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Objetivos</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-recycle" viewBox="0 0 16 16">
            <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z"/>
        </svg>
        <p className='items-desc'>Favorecer que la vida de la escuela se renueve permanentemente a partir de un continuo trabajo.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-universal-access" viewBox="0 0 16 16">
            <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z"/>
        </svg>
        <p className='items-desc'>Educar con sentido de justicia y libertad que promueva la solidaridad y el compromiso social.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-box2-heart-fill" viewBox="0 0 16 16">
            <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
        </svg>
        <p className='items-desc'>Estimular el afecto progresivo hacia los otros, desarrollando el sentido de equidad, de respeto a la libertad y a los criterios y valores ajenos.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z"/>
            <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"/>
        </svg>
        <p className='items-desc'>Desarrollar actividades culturales, deportivas, científicas tecnológicas, extra programáticas que formen parte de la currícula institucional.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-eyeglasses" viewBox="0 0 16 16">
            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4m2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A2 2 0 0 0 8 6c-.532 0-1.016.208-1.375.547M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
        </svg>
        <p className='items-desc'>Valorizar la necesidad de profesionalizar en forma creciente la docencia.</p>
    </div>
    <div class="col items-niveles">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-badge" viewBox="0 0 16 16">
            <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
        </svg>
        <p className='items-desc'>Afianzar la identificación.</p>
    </div>
  </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Metas</p>
            </button>
          <hr className='divisor'/>  
        </p>
        
        <div class="collapse" id="collapseExample1">
            <div class="card card-body">
            <div class="container text-center">
      <div className='row row-cols-2'>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-walking" viewBox="0 0 16 16">
                <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6.44 3.752A.75.75 0 0 1 7 3.5h1.445c.742 0 1.32.643 1.243 1.38l-.43 4.083a1.8 1.8 0 0 1-.088.395l-.318.906.213.242a.8.8 0 0 1 .114.175l2 4.25a.75.75 0 1 1-1.357.638l-1.956-4.154-1.68-1.921A.75.75 0 0 1 6 8.96l.138-2.613-.435.489-.464 2.786a.75.75 0 1 1-1.48-.246l.5-3a.75.75 0 0 1 .18-.375l2-2.25Z"/>
                <path d="M6.25 11.745v-1.418l1.204 1.375.261.524a.8.8 0 0 1-.12.231l-2.5 3.25a.75.75 0 1 1-1.19-.914zm4.22-4.215-.494-.494.205-1.843.006-.067 1.124 1.124h1.44a.75.75 0 0 1 0 1.5H11a.75.75 0 0 1-.531-.22Z"/>
            </svg>
        <p className='items-desc'>Lograr una integración social que permita al alumno dirigir su conducta como protagonista del medio en que vive.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-person-raised-hand" viewBox="0 0 16 16">
                <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207"/>
                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            </svg>
        <p className='items-desc'>Despertar permanentemente la curiosidad en los niños para que sean continuos descubridores de experiencia.</p>
        </div>
        <div class="col items-niveles">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 14.933a1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
            </svg>
        <p className='items-desc'>Ayudar a los niños a ir formándose como personas honestas, alegres, con capacidad de escucha y fieles defensores de su cultura.</p>
        </div>
        <div class="col items-niveles">
            <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={Familiaicon} alt='familiaicon'/>
        <p className='items-desc'>Permitir al total alumnado, familias y cuerpo docente crecer con la riqueza que permite la diferencia.</p>
        </div>
        </div>
        <img src={CorteFoto} className='img-fluid' alt='fotolinea'/>
      </div>
            </div>
        </div>
      </div>
      <div>
        <p class="text-center">
            <button class="mt-2 btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                <p className='mb-0 fs-2 fuente'>Modalidades</p>
            </button>
          <hr className='divisor'/>  
          </p>
          <div class="collapse" id="collapseExample2">
              <div class="card card-body">
              <div className='row row-cols-2 text-center'>
          <div class="col items-niveles">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#334779" class="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
                  <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"/>
              </svg>
          <p className='items-desc'>Incentivar el proceso de estructuración del pensamiento, de la imaginación creadora, la forma de expresión personal y de comunicacion verbal y gráfica.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamiliaSuperpuestaIcon} alt='familiaicon'/>
          <p className='items-desc'>Estimular hábitos de integración social, de convivencia grupal, de solidaridad y cooperación y de conservación del medio ambiente.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={DiversityIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={HeartHandIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={FamilyQuestionIcon} alt='familiaicon'/>
          <p className='items-desc'>Favorecer el desarrollo progresivo de la identidad, la autonomía y la pertenencia a la comunidad local.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={VoiceIcon} alt='familiaicon'/>
          <p className='items-desc'>Fomentar la comunicación, el diálogo y el respeto mutuo entre las familias y la institución.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={ProcessIcon} alt='familiaicon'/>
          <p className='items-desc'>Prevenir y atender las desigualdades físicas, psíquicas y sociales.</p>
          </div>
          <div class="col items-niveles">
              <img width="50" height="50" fill="#334779" class="bi bi-shield-shaded" viewBox="0 0 16 16" src={CaduceusIcon} alt='familiaicon'/>
          <p className='items-desc'>Acompañar en la construcción de valores de solidaridad, cuidado de sí mismo y de los otros.</p>
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

export default Niveles