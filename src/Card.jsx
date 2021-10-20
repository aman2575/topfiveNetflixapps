import React from "react";

function Card(props){
    //console.log(props)
    return(
      <>
        <div className="a-box">
        <div className="img-container">
            <div className="img-inner">
            <div className="inner-skew">
                <img src={props.imgsrc}/>
            </div>
            </div>
        </div>
        <div className="text-container">
            <h3>{props.title}</h3>
            <div>
            {props.sname}  
        </div>
        <a href={props.link} className="button">Watch Now!!!</a>
        </div>
        </div>

    </>
    );
  }

export default Card;

        
        