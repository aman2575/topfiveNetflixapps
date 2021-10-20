import React from "react";
import Heading from "./Headings";
import Images from "./Images";



function Card(props){
    //console.log(props)
    return(
      <>
        <div className="a-box">
        <div className="img-container">
            <div className="img-inner">
            <div className="inner-skew">
                <Images imgsrc={props.imgsrc}/>
            </div>
            </div>
        </div>
        <div className="text-container">
            <Heading title={props.title}/>
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

        
        