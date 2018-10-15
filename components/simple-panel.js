import React from 'react';

function SimplePanel(props) {
  return(
    <div className="textContainer">
      <p className="text">{props.text}</p>
      {props.children}
      <style jsx>{`
        .textContainer{
          border-radius: 10px;
          background: rgba(255,255,255,0.2);
          padding: 10px;
          margin: 0px 30px;
          height: 100%;
          text-align: left;
          color: #fff;
        }
        .text{
          margin:5px;
          text-align: justify;
        }
      `}</style>
    </div>
  );
}

export default SimplePanel;