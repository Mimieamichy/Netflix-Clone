import React from "react";
import "./container.css"


export default function Container({ title, info, img, alt, orderOne, orderTwo }) {
  return (
    <section className="section-container">
      
      <div className="container-left" style={{
        order: orderTwo
      }}>
        <h2 className="container-title">{title}</h2>
        <p className="container-info">{info}</p>
      </div>
      <div className="container-right" style={{
        order: orderOne
      }}>
        <img src={img} alt={alt} className="container-images"/>
        
      </div>

    </section>
  );
}
