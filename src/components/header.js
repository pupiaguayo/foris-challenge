import React from "react";
import logo from "../images/logo.svg";
import "../styles/header.css";
export const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} className="App-logo" alt="logo" />
      <span>Juego de Memoria</span>
    </div>
  );
};
