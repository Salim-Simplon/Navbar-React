import React from "react";
import "./Link.css";

function Link() {
  return (
    <span className="link">
      <a href="#" id="first">
        Accueil
      </a>
      <a href="#">Equipe</a>
      <a href="#">A propos</a>
      <a href="#">Contact</a>
    </span>
  );
}

export default Link;
