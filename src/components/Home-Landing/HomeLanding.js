import React from 'react';
import ConveniosFotos from "./conveniosfotos.png"
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
      </div>
      <a class="twitter-timeline" data-lang="es" data-height="400" href="https://twitter.com/InstSantaAna?ref_src=twsrc%5Etfw">Tweets de InstSantaAna</a>
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
