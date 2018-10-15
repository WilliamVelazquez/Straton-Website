import React from 'react';

function SimpleCard(props) {
  return(
    <div className="textContainer" onClick={props.handleClick}>
      <p className="title">{props.title}</p>
      {props.children}
      {
        props.img &&
        <img src={`/static/${props.img}`} alt={props.title}/>
      }
      <style jsx>{`
        .textContainer{
          border-radius: 10px;
          background: #eaeaea;
          padding: 10px;
          margin: 0px 30px;
          height: 100%;
          text-align: center;
          color: #052a4f;
          cursor: pointer;
          display: grid;
        }
        .textContainer:hover{
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.5);
        }
        .title{
          margin: 5px 25px;
          font-weight: bold;
          font-size: 22px;
        }
        img{
          width: 50%;
          /*height: 100px;*/
          object-fit: cover;
          justify-self: center;
          align-self: center;
        }
      `}</style>
    </div>
  );
}

export default SimpleCard;