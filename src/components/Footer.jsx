import React from "react";

import image1 from "../assets/img/Grupo de máscara 9.png";
import image2 from "../assets/img/imagem-empresa.png";

import '../styles/Footer.css'

export function Footer() {
  return (
    <footer className="rodape">
      <div className="img">
        <img src={image1} alt="" />
      </div>
      <div className="grid">
        <div className="home">
          <p>Home</p>
          <p>Sobre</p>
          <p>O Consultório</p>
        </div>

        <div className="perguntas-freq">
          <p>Perguntas Frequentes</p>
          <p>Notícias</p>
          <p>Conteúdo Contato</p>
        </div>

        <div className="imagem">
          <img src={image2} alt="" />
        </div>

        <div className="consultorio">
          <p>Consultório particular</p>
          <p>
            Av. Senador Vergueiro,2123 - São Bernardo do Campo - 16º. Andar -
            Sala 1605 | CEP 09601-000 | Tel: 11 91057.8890
          </p>
          <p>Veja como chegar</p>
          <button className="btn btn-primary">
            <i className="fa-brands fa-waze"></i> Waze
          </button>
          <button className="btn btn-success">
            <i className="fa-solid fa-map-location-dot"></i> Google Maps
          </button>
        </div>
      </div>
    </footer>
  );
}
