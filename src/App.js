import React from "react";
import "./App.css";
import Link from "./Links/Link";
import Logo from "./Logo/Logo";

/*
function Logo() {
  return <img src="/images/Logo-Simplon.png" alt="" />;
}

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
*/

function App() {
  return (
    <div className="App">
      <Logo />
      <Link />
    </div>
  );
}

export default App;
