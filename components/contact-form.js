import React from 'react';
import Link from 'next/link';

import TitleBand from './title-band';
import SocialNetworks from './social-networks';

function ContactForm(props) {
  //console.log(props);
  return(
    <div>
      <TitleBand title="Contáctanos" position="center"/>
      
      <div className="container">
        <h2 className="text">Ingresa tu información</h2>

        <div className="contactForm">
          <form>
            <input 
              type="text"
              placeholder="*Nombre"
              value={props.name}
              onChange={props.changeName}
              className={props.validName?"":"errorShadow"}
            />

            <input 
              type="text"
              placeholder="*E-mail"
              value={props.email}
              onChange={props.changeEmail}
              className={props.validEmail?"":"errorShadow"}
            />

            <input 
              type="text"
              placeholder="Teléfono"
              value={props.phone}
              onChange={props.changePhone}
            />

            <textarea 
              rows="4"
              type="text"
              placeholder="Comentarios/Observaciones"
              value={props.comments}
              onChange={props.changeComments}
            />

            <p className="helpText">*Datos requeridos</p>

            <div className="rowContainer">
              <p className="text">¿Deseas que te llamémos?</p>            
              <input 
                className="check"
                type="checkbox"
                value={props.askForCall}
                onChange={props.changeAskForCall}
              />
            </div>

            <button 
              type="button"
              onClick={props.handleSubmit}
            >
              Enviar
            </button>
          </form>
          <img src="/static/FullLogo_1024.png" alt="HAYD"/>
        </div>

      </div>
      

      <p className="visitUs">Visita nuestras redes sociales</p>
      <SocialNetworks />

      <style jsx>{`
        .container{
          border-radius: 10px;
          background: #eaeaea;
          padding: 10px;
          margin: 30px;
          height: 100%;
          text-align: center;
          color: #052a4f;
        }
        .text{
          margin: 10px;
        }
        .helpText{
          text-align: left;
          font-size: 10px;
          font-weight: bold;
          margin: 0px 15px;
          margin-top: -5px;
        }
        .contactForm{
          display: grid;
          grid-template-columns: repeat(2,1fr);
        }
        form{
          display: grid;
          grid-autoflow: column;
        }
        .contactForm input,
        .contactForm textarea{
          padding: 10px;
          margin: 10px;
          border-radius: 10px;
          border: 2px solid #052A4F;
        }
        .contactForm input.errorShadow,
        .contactForm textarea.errorShadow{
          -moz-box-shadow:    0px 0px 10px 1px #f00;
          -webkit-box-shadow: 0px 0px 10px 1px #f00;
          box-shadow:         0px 0px 10px 1px #f00;
          /*-moz-box-shadow:    3px 3px 5px 6px #ccc;
          -webkit-box-shadow: 3px 3px 5px 6px #ccc;
          box-shadow:         3px 3px 5px 6px #ccc;*/
        }
        .check{
          margin: 16px 5px !important;
        }
        .rowContainer{
          display: grid;
          grid-autoflow: column;
          grid-template-columns: auto 1fr;
        }
        .visitUs{
          color: #052a4f;
          text-align: center;
        }
        button{
          cursor: pointer;
          border-radius: 5px;
          border: 3px solid #000752;
          padding: 10px 30px;
          margin: 10px;
          background: #052A4F;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
        }
        button:hover,
        button:active
        {
          color: #052A4F;
          background: #fff;
        }
        img{
          width: 350px;
          justify-self: center;
          align-self: center;
        }
        @media only screen and (max-width : 768px) {
          .contactForm{
            grid-template-columns: 1fr;
          }
          img{
            display: none;
            width: 100px;
          }
        }
      `}</style>
    </div>
  );
}

export default ContactForm;