import React from 'react';

function PrincipalPanel(props) {
  return(
    <div className="container">
      <div className="content">
        <p className="title">{props.title}</p>
        {props.children}
      </div>
      <img src={`/static/${props.img}`} alt={props.title}/>
      <style jsx>{`
        .container{
          display: grid;
          grid-template-columns: 2fr 1fr;
          background: #052A4F;
          padding: 10px;
          height: 100%;
          color: #fff;
          text-align: center;
          margin-bottom: 20px;
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
        }
        .content{
          margin: 50px;
        }
        .title{
          margin: 10px;
          font-weight: bold;
          font-size: 48px;
          text-align: center;
        }
        img{
          width: 96%;
          object-fit: cover;
          justify-self: center;
          align-self: center;
        }
        /* iPads (portrait and landscape) ----------- */
        @media only screen and (min-width : 768px) and (max-width : 1024px) {
          .container{
            grid-template-columns: 1fr;
          }
          img{
            width: 60%;
            margin-bottom:25px;
          }
          .title{
            font-size: 45px;
          }
        }
        @media only screen and (max-width : 768px) {
          .container{
            grid-template-columns: 1fr;
          }
          img{
            width: 50%;
            margin-bottom:25px;
          }
          .title{
            font-size: 30px;
          }
        }
      `}</style>
    </div>
  );
}

export default PrincipalPanel;