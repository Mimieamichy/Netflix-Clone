import React from "react";
import "./accodian.css";

export default function Accodian({ plus, minus, title, text }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <section className="accodian-section">
      <div
        className="accodian-title"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <h2>{title}</h2>
        <h1>{isOpen ? <i class={minus}></i> : <i class={plus}></i>}</h1>
      </div>
      {isOpen && <div className="accodian-text">
        <h2 className="accodian-texts">{isOpen && text}</h2>
      </div>}
      
     
    </section>
  );
}
