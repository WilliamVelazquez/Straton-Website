import React from 'react';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
//import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function SocialNetworks(props) {
  config.autoAddCss = false

	//console.log(props);
  //const element = <FontAwesomeIcon icon={faCoffee} />
	return(
		<div className="container">

      <a 
        className="fa" 
        type="button"
        target="_blank" 
        rel="noopener noreferrer" 
        href={props.facebook || "https://www.facebook.com/HAYDConsulting/"}
      >
        <FontAwesomeIcon icon={ faFacebookF } />
      </a>

      <a 
        className="fa" 
        type="button"
        target="_blank" 
        rel="noopener noreferrer" 
        href={props.twitter || "https://twitter.com/HaydConsulting"}
      >
        <FontAwesomeIcon icon={ faTwitter } />
      </a>

      <a 
        className="fa" 
        type="button"
        target="_blank" 
        rel="noopener noreferrer" 
        href={props.instagram || "https://www.instagram.com/haydconsulting/"}
      >
        <FontAwesomeIcon icon={ faInstagram } />
      </a>
      
      <style jsx>{`
        .container{
          margin: 15px;
          display: grid;
          grid-gap: 25px;
          grid-auto-flow: column;
          grid-auto-columns: min-content;
          justify-content: center;
        }
        a{
          cursor: pointer;
          border: 3px solid #000752;
          background: #052A4F;
          color: #fff;
          font-weight: bold;
          text-decoration: none;
          -webkit-transition-duration: 0.4s; /* Safari */
          transition-duration: 0.4s;
        }
        a:hover{
          color: #052A4F;
          background: #fff;
        }
        .fa{
          padding: 15px;
          font-size: 20px;
          width: 30px;
          text-align: center;
          margin: 5px 2px;
          border-radius: 50%;
          justify-self: center;
        }
      `}</style>
    </div>
	);
}

export default SocialNetworks;