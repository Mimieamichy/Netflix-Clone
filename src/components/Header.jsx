import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import "./header.css"


export default function Header() {
  return (
    <header className="header">
      <Nav />
      <Hero />

    </header>
  );
}
