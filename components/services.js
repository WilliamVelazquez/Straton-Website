import React, {Component} from 'react';

import SimpleCard from './simple-card';
import SimplePanel from './simple-panel';
import SocialNetworks from './social-networks';

class Services extends Component {

  setServiceARef = (element) => {
    this.ARef=element;
  }

  setServiceBRef = (element) => {
    this.BRef=element;
  }

  setServiceCRef = (element) => {
    this.CRef=element;
  }

  setServiceDRef = (element) => {
    this.DRef=element;
  }

  scrollToA = () => {
    this.ARef.scrollIntoView({ behavior: "smooth" });
    //document.getElementById("containingDiv").scrollTop += 10;
    //window.scrollBy(0, 65); // Adjust scrolling with a negative value here
  }

  scrollToB = () => {
    this.BRef.scrollIntoView({ behavior: "smooth" });
  }

  scrollToC = () => {
    this.CRef.scrollIntoView({ behavior: "smooth" });
  }

  scrollToD = () => {
    this.DRef.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return(
      <div className="container">

        <div className="gridRow">
          <SimpleCard 
            title="Idea de negocio o nuevo proyecto"
            img="foco.png"
            handleClick={this.scrollToA}
          />
          <SimpleCard 
            title="Evaluación de proyectos"
            img="foco.png"
            handleClick={this.scrollToB}
          />
          <SimpleCard 
            title="Modelo de negocios"
            img="foco.png"
            handleClick={this.scrollToC}
          />
          <SimpleCard 
            title="Valuación de empresas"
            img="foco.png"
            handleClick={this.scrollToD}
          />
        </div>

        <SimplePanel title="Idea de negocio o nuevo proyecto" setRef={this.setServiceARef}>
          <p className="text">
            Muchas veces tenemos una idea nueva o un nuevo negocio que queremos poner en marcha, pero tenemos incertidumbre de saber si va a funcionar o no y nos aventamos a la viva México “a ver si funciona”.
          </p>
          <p className="text">
            Nuestro propósito es ayudarte a materializar tu idea de negocio, es decir, ayudarte a saber si es viable, factible y conocer las posibles pérdidas o ganancias que generará tu proyecto en el futuro basado en ciertos supuesto (ventas esperadas, costos, gastos, inversión inicial, etc.), si aún no tienes esos supuestos podemos ayudarte a calcularlos. 
          </p>
          <p className="text">
            Estaremos trabajando de la mano contigo, planteando objetivos, metas y diseñando estrategias y una estructura óptima para poder crecer el negocio y hacer real tu nueva empresa generando el mayor rendimiento posible para ti y tu compañía.
          </p>
          <img src="/static/IdeaNegocio.png" alt="Idea de Negocio"/>
        </SimplePanel>

        <SimplePanel title="Evaluación de proyectos" setRef={this.setServiceBRef}>
          <p className="text">
            A través de proyecciones, calcularemos la rentabilidad de tu proyecto para saber si es conveniente para ti llevarlo a cabo o no, desarrollaremos escenarios optimistas, conservadores y pesimistas también calcularemos la probabilidad de ocurrencia de los distintos escenarios para mitigar el riesgo de la inversión.
          </p>
          <p className="text">
            Lo haremos a través de distintos indicadores y al final tendrás:
          </p>
          <p className="text">• Flujos de efectivo descontados.</p>
          <p className="text">• Valor presente neto.</p>
          <p className="text">• Tasa interna de retorno.</p>
          <p className="text">• Índice de valor presente neto.</p>
          <p className="text">• Periodo de recuperación de la inversión.</p>
          <img src="/static/EvalucionProyectos.png" alt="Evaluación de proyectos1"/>
          <img src="/static/ProcesoAdministracionProcesos.png" alt="Evaluación de proyectos2"/>
        </SimplePanel>

        <SimplePanel title="Modelo de negocios" setRef={this.setServiceCRef}>
          <p className="text">
            Las causas más importante por la que las PYMES fracasan son una mala planeación y una mala gestión, nuestra tarea es ayudarte a hacer una correcta planeación a través de los estudios de mercado, técnico y financiero, para llevar por a la empresa por una camino exitoso, durante el proceso fijaremos objetivos concretos, estrategias para lograr las metas planteadas y una estructura organizacional y financiera óptima  para el mejor funcionamiento de la compañía.
          </p>
          <img src="/static/ModeloNegocio.png" alt="Modelo de negocios"/>
        </SimplePanel>

        <SimplePanel title="Valuación de empresas" setRef={this.setServiceDRef}>
          <p className="text">
            Cuando vas a fusionar tu empresa con otra, cuando una persona está interesada en invertir en tu compañía (convertirse en socio) e incluso cuando alguien quiere comprar tu empresa es indispensable conocer el valor de tu empresa para saber el precio que tiene que pagar por lo que has construido y que seguirá generando efectivo, es por esta razón que queremos ayudarte a conocer el valor de tu empresa.
          </p>
          <p className="text">
            Nos basamos en el método de flujos descontados que determinan el valor de tu compañía a través de una estimación de flujos de efectivo que se generarán o que se esperan en el futuro, nos basamos en este método debido a que el valor de las empresas no se determina solo por lo que vale hoy, sino por lo que puede llegar a generar de beneficios y rendimientos en el futuro.
          </p>
          <img src="/static/ValuacionEmpresas.png" alt="Valuación de empresas"/>
        </SimplePanel>

        <SocialNetworks />

        <style jsx>{`
          .container{
            width:100%;
          }
          .gridRow{
            display: grid;
            grid-gap: 10px;
            grid-row-gap: 35px;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            margin-bottom: 40px;
          }
          .text{
            margin:10px;
            text-align: justify;
            font-size: 20px;
          }
          img{
            text-align: center;
            width: 40%;
            margin: 20px 0px;
          }
          @media only screen and (max-width : 768px) {
            img{
              width: 80%;
            }
          }
          @media only screen and (max-width : 667px) {
          }
        `}</style>
      </div>
    );
  }
}

export default Services;