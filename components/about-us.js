import React from 'react';

import RibbonPanel from './ribbon-panel';
import SimplePanel from './simple-panel';
import TitleBand from './title-band';
import List from './list';
import SocialNetworks from './social-networks';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">

      <RibbonPanel title="Misión" img="mision.jpg">
        <p className="text">Impulsar la materialización de tu plan de negocios mediante el análisis financiero y el diseño de estrategias empresariales para la creación de valor.</p>
      </RibbonPanel>

      <RibbonPanel title="Visión" img="vision.jpg">
        <p className="text">Ser la consultora de negocios más importante de México con influencia en toda América Latina favoreciendo un impacto económico positivo global.</p>
      </RibbonPanel>

      <RibbonPanel title="Valores" img="valores.jpg">
        <List
          textColor="#052a4f"
          items={[
            {key:'Honestidad', description:'Nuestro activo más valioso.'},
            {key:'Responsabilidad', description:'Comprometernos a realizar nuestro trabajo en tiempo en y forma.'},
            {key:'Colaboración', description:'Ayudarte a cultivar el valor tu empresa.'},
            {key:'Pasión', description:'Convertirnos en parte de tu empresa hasta cumplir juntos los objetivos planteados.'},
            {key:'Respeto', description:'Siempre con una actitud y un trato digno.'}
          ]}
        />
      </RibbonPanel>

      <SocialNetworks />

      <style jsx>{`
        .container{
          width:100%;
        }
        .text{
          font-size: 20px;
          color: #052a4f;
          margin-top: 25px;
        }
        img{
          width: 100px;
        }
      `}</style>
    </div>
	);
}

export default AboutUs;