import React from "react";
import "./nav.css"
import Logo from "../imgs/netflix-logo.png";
import Button from "./Button";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={Logo} alt="netflix logo" />
      </div>
      <Button>Sign in</Button>

    </nav>
  );
}
