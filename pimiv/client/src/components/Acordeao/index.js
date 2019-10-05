import React, { Component } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default class Acordeao extends Component {
  render() {
    return (
      <div className="bagulhao">
        <div className="bagulhin">
          <h3>[+] CTRL Frota</h3>
          <div className="menuzin">
            <li className="itemzin" id="viagens">
              <a href="#viagens" className="butao">
                <FontAwesomeIcon icon="truck-loading" /> Viagens
              </a>
              <div className="subzin">
                <a href="#">
                  <FontAwesomeIcon icon="file-invoice-dollar" /> Histórico
                </a>

                <a href="#">
                  <FontAwesomeIcon icon="gas-pump" /> Solicitações
                </a>
              </div>
            </li>

            <li className="itemzin" id="veic">
              <a href="/veiculos" className="butao">
                <FontAwesomeIcon icon="truck" /> Veículos
              </a>
              <div className="subzin">
                <a href="#">
                  <FontAwesomeIcon icon="cogs" /> Manutenções
                </a>

                <a href="#">
                  <FontAwesomeIcon icon="gas-pump" /> Sinistros
                </a>

                <a href="#">
                  <FontAwesomeIcon icon="gas-pump" /> Abastecimentos
                </a>

                <a href="#">
                  <FontAwesomeIcon icon="truck-monster" /> Pneus
                </a>
              </div>
            </li>

            <li className="itemzin" id="motoristas">
              <a href="#motoristas" className="butao">
                <FontAwesomeIcon icon="id-card" /> Motoristas
              </a>
              <div className="subzin">
                <a href="#">
                  <FontAwesomeIcon icon="file-invoice-dollar" /> Multas
                </a>

                <a href="#">
                  <FontAwesomeIcon icon="gas-pump" /> Abastecimentos
                </a>
              </div>
            </li>

            <li className="itemzin" id="estab">
              <a href="#estab" className="butao">
                <FontAwesomeIcon icon="warehouse" /> Estabelecimentos
              </a>
              <div className="subzin">
                <a href="#">
                  <FontAwesomeIcon icon="gas-pump" /> Postos
                </a>
                <a href="#">
                  <FontAwesomeIcon icon="tools" /> Oficinas
                </a>
              </div>
            </li>

            <li className="itemzin" id="logout">
              <a href="#" className="butao">
                <FontAwesomeIcon icon="sign-out-alt" /> Logout
              </a>
            </li>
          </div>
        </div>
      </div>
    );
  }
}
