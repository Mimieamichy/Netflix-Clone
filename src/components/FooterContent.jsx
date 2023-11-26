import React from "react";
import { footerList } from "../constants/data";
import './footerContent.css'

export default function FooterContent() {
  return (
    <div className="footerContent-section">
      
      {footerList.map((item) => (
        <ul key={item.id}>
          <li>
            <a href="#">{item.l1}</a>
          </li>
          <li>
            <a href="#">{item.l2}</a>
          </li>
          <li>
            <a href="#">{item.l3}</a>
          </li>
          <li>
            <a href="#">{item.l4}</a>
          </li>
        </ul>
      ))}
    </div>
  );
}
