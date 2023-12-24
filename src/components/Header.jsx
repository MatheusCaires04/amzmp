import React from "react";

import "../styles/Header.css";

import logo from "../assets/logotipo-suzane.png";

export const Header = () => {
  return (
    <header id="cabecalho">
      <div>
        <img src={logo} alt="Logotipo" />
      </div>
      <div>
        <nav>
          <a href="#">Sobre</a>
          <a href="#">Perguntas Frequentes</a>
          <a href="#">Notícias de Conteúdo</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
};
