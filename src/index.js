import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from "./Card";
import Sdata from "./Sdata"



ReactDOM.render(
  <>
    <h1 className='heading_style'>List of Top 5 Netflix Series in 2021</h1>
    {Sdata.map((val) => {
      return(
      <Card 
      imgsrc={val.imgsrc}
      title={val.title}
      sname = {val.sname}
      link = {val.link}
    />
      );
    })}
  </>
  
  ,document.getElementById('root')
);


