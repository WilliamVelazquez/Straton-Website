import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import IfOffline from '../containers/if-offline';

function Header(props) {
	//console.log(props);
	return(
		<header>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="description" 
          content="Te ayudamos a conocer la factibilidad, viabilidad y rentabilidad de tu proyecto con indicadores financieros y estrategias para optimizar tu operación."
        />
        {
          (props.active=="Inicio" || props.active=="Nosotros" || props.active=="Contacto")?
          <meta name="robots" content="index, follow" />
          :<meta name="robots" content="noindex, nofollow" />
        }
        <title>{props.active || "Straton"}</title>
        <link rel="icon" href="/static/Straton.ico" />
        <link href="/static/fa-styles.css" type="text/css" rel="stylesheet" />
        
        <meta name="theme-color" content="#0A73ED" />
        <link rel="manifest" href="/static/manifest.webmanifest" />

        <link rel='apple-touch-icon' href='/static/Logo_512.png' />
        <meta name="apple-mobile-web-app-title" content="Straton" />
        <meta name="apple-mobile-web-app-capable" content="no" />
        <meta name="apple-mobile-web-apps-status-bar-style" content="black-translucent" />
      </Head>
      
      <nav className="navbar">
        <div className="left">
          <Link href="/">
            <img className="btn" src="/static/FullLogo_512_White.png" alt="Straton"/>
          </Link>  
            <div className="Offline"><IfOffline>Offline</IfOffline></div>
        </div>
        <Link prefetch href="/">
          <a className={`${props.active=="Inicio"?"active":""}`}>Inicio</a>
        </Link>
        <Link prefetch href="/nosotros">
          <a className={`${props.active=="Nosotros"?"active":""}`}>Nosotros</a>
        </Link>
        <Link prefetch href="/servicios">
          <a className={`${props.active=="Servicios"?"active":""}`}>Servicios</a>
        </Link>
        <Link prefetch href="/contacto">
          <a className={`${props.active=="Contacto"?"active":""}`}>Contacto</a>
        </Link>
      </nav>

      <style jsx>{`
        header{
          background: #052A4F;
          padding: 10px;
          border-radius: 0px 0px 10px 10px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99;
        }
        header a{
          text-decoration: none;
          color: #fff;
          font-size: 18px;
          margin-right: 20px;
          justify-self: right;
        }
        header a:hover{
          /*font-weight: bold;*/
          border-bottom: 2px solid #fff;
        }
        .active{
        	font-weight: bold;
          border-bottom: 2px solid #fff;
        }
        .navbar{
          display:grid;
          grid-template-columns: 8fr 1fr 1fr 1fr 1fr;
          align-items:center;
        }
        img{
          width: 120px;
        }
        .btn{
          cursor:pointer;
        }
        .left{
          flex:1;
          float:left;
          display:grid;
          grid-auto-flow: column;
          grid-template-columns: 125px 1fr;
        }
        .left .Offline{
          margin:0;
          padding:0;
          /*align-self:center;*/
          color:#F1C40F;
          font-size: 24px;
          align-self: flex-end;
          font-weight: bold;
        }
        @media only screen and (max-width : 768px) {
          .left .Offline{
            font-size:20px;
          }
          img{
            width: 100px;
          }
          .left{
            grid-template-columns: 105px 1fr;
          }
        }
        @media only screen and (max-width : 667px) {
          .left .Offline{
            font-size:18px;
          }
          img{
            width: 80px;
          }
          .left{
            grid-template-columns: 85px 1fr;
          }
        }
      `}</style>
    </header>
	);
}

export default Header;