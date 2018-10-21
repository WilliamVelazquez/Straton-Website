import React from 'react';

import RibbonPanel from './ribbon-panel';
import PrincipalPanel from './principal-panel';
import TitleBand from './title-band';
import List from './list';
import SocialNetworks from './social-networks';

function AboutUs(props) {
	//console.log(props);
	return(
		<div className="container">

      <PrincipalPanel title="¿Quiénes somos?" img="FullLogo_1024_White.png">
        <p className="textLeft">Somos una empresa que brinda consultoría y asesoría financiera, nuestro propósito es ayudarte en el proceso de materialización de tu idea de negocio, e ir trabajando de la mano contigo hasta lograr poner en marcha tu negocio.</p>
        <p className="textLeft">Nos enfocamos en ayudarte también en estructurar, analizar y evaluar tu proyecto de inversión para saber si es redituable poner en acción el plan que tenías pensado hacer y si no tenías un plan, nosotros te ayudamos a diseñarlo.</p>
        <p className="textLeft">Esto lo haremos a través de análisis de factibilidad, viabilidad y rentabilidad del proyecto, estructuración de tus operaciones y diseño de estrategias empresariales para optimizar al máximo tus recursos, capital humano y con ello generar el mayor rendimiento para tu compañía.</p>
      </PrincipalPanel>

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
          margin-top: -60px;
        }
        .text{
          font-size: 20px;
          color: #052a4f;
          margin-top: 25px;
        }
        .textLeft{
          margin-top: 25px;
          font-size: 25px;
          color: #fff;
          text-align: left;
          text-align: justify;
        }
        img{
          width: 100px;
        }
        @media only screen and (min-width : 1025px) and (max-width : 1280px) {
          .textLeft{
            font-size: 23px;
          }
        }
        @media only screen and (max-width : 768px) {
          .textLeft{
            font-size: 20px;
          }
          .container{
            margin-top: -70px;
          }
        }
      `}</style>
    </div>
	);
}

export default AboutUs;