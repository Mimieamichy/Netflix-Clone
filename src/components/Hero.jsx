import React from "react";
import "./hero.css";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Unlimited movies, TV shows, and more</h1>
        <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
        
        <GetStarted />
      </div>
    </section>
  );
}
