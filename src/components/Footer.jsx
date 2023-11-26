import React from "react";
import FooterContent from "./FooterContent";
import "./footerContent.css";

export default function Footer() {
  return (
    <footer>
      <span>
        <a href="#">Questions? Contact us.</a>
      </span>
      <FooterContent />
    </footer>
  );
}
