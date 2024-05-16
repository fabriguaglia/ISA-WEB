import React from 'react';
import { Tweet } from 'react-tweet'
import ConveniosFotos from "./conveniosisa.png"
import "./HomeLanding.css"
import Footer from '../Footer/Footer';
import PrincCarr from '../../assets/PrincCarr/PrincCarr';
import InicialCarr from '../../assets/InicialCarr/InicialCarr';
import BarraColores from '../../assets/BarraColores'
import PrimarioCarr from '../../assets/PrimarioCarr/PrimarioCarr';
import SecundarioCarr from '../../assets/SecundarioCarr/SecundarioCarr';
import TerciarioCarr from '../../assets/TerciarioCarr/TerciarioCarr';

function HomeLanding() {
  return (
    <>
        <BarraColores />

      <PrincCarr />
      
        <BarraColores />

      <InicialCarr />

        <BarraColores />
      
      <PrimarioCarr />
      
        <BarraColores />
      
      <SecundarioCarr />

        <BarraColores />
      
      <TerciarioCarr/>

        <BarraColores/>
        
      <div className="container text-center">
        <p className="fs-3 items-desc titleinicial items-desc text-center">¡Últimas novedades!</p>
        <hr className='divisor'/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Tweet id="1791136532650180741" />
          </div>
          <div className="col-lg-4">
            <Tweet id="1790358902753935505" />
          </div>
          <div className="col-lg-4">
            <Tweet id="1790351360950694044" />
          </div>
        </div>
      </div>
        <div className="container text-center">
          <p className="fs-3 items-desc titleinicial items-desc text-center">Convenios con otras instituciones</p>
          <hr className='divisor'/>
            <div className="container text-center">
              <img className='img-fluid img-conv' alt='...' src={ConveniosFotos}/>
            </div>
        </div>
      <Footer />
    </>
  );
}

export default HomeLanding;
