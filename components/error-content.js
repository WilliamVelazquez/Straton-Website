import React from 'react';
import Link from 'next/link';

import SocialNetworks from './social-networks';

function ErrorContent(props) {
	//console.log(props);
	return(
		<div className="container">
      
      <img src="/static/FullLogo_1024.png" alt="HAYD"/>

      <h1 className="text">{props.msg}</h1>

      <p className="text">Visita nuestras redes sociales</p>
      <SocialNetworks />

      <div className="btnContainer">
        <Link href="/nosotros">
          <button type="button">Acerca de nosotros!</button>
        </Link>
        <Link href="/contacto">
          <button type="button">Contáctanos!</button>
        </Link>
      </div>


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
        .btnContainer{
          display: grid;
          column-gap: 50px;
          grid-auto-flow: column;
          grid-template-columns: repeat(2, 1fr);
          margin: 10px;
        }
        button{
          cursor: pointer;
          border-radius: 5px;
          border: 3px solid #000752;
          padding: 10px;
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
          width: 22%;
          margin-top: 25px;
        }
        @media only screen and (max-width : 667px) {
          .btnContainer{
            grid-auto-flow: row;
            grid-row-gap: 15px;
            grid-template-columns: 1fr;
            gap-row
          }
        }
        @media only screen and (max-width : 768px) {
          img{
            width: 50%;
          }
        }
      `}</style>
    </div>
	);
}

export default ErrorContent;