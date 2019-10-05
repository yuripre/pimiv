import React, { Component } from "react";
import Acordeao from "C:/Users/Yuri/Documents/pimiv/client/src/components/Acordeao";
import axios from "axios";
import {
  Table,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class FormVeiculo extends Component {
  state = {
    veiculos: [],
    newVeicModal: false
    /*newVeicData: {
      MOD_VEICULO: "",
      MAR_VEICULO: "",
      RENAVAM_VEICULO: "",
      ANO_VEICULO: "",
      PLACA_VEICULO: "",
      COMB_VEICULO: "",
      KM_TROCA_OLEO: "",
      KM_TROCA_PNEU: "",
      KM_REV_VEICULO: "",
      KM_LITRO_VEICULO: ""
    },
    editVeicData: {
      ID_VEICULO: "",
      MOD_VEICULO: "",
      MAR_VEICULO: "",
      RENAVAM_VEICULO: "",
      ANO_VEICULO: "",
      PLACA_VEICULO: "",
      COMB_VEICULO: "",
      KM_TROCA_OLEO: "",
      KM_TROCA_PNEU: "",
      KM_REV_VEICULO: "",
      KM_LITRO_VEICULO: ""
    },
    NewVeicModal: false,
    editVeicModal: false*/
  };

  componentWillMount() {
    axios.get("http://localhost:3333/veiculos").then(response => {
      this.setState({
        veiculos: response.data
      });
    });
  }

  toggleNewVeicModal() {
    this.setState({
      newVeicModal: true
    });
  }

  render() {
    let veiculos = this.state.veiculos.map(veiculo => {
      return (
        <tr key={veiculo.ID_VEICULO}>
          <td>{veiculo.ID_VEICULO}</td>
          <td>{veiculo.MOD_VEICULO}</td>
          <td>{veiculo.MAR_VEICULO}</td>
          <td>{veiculo.RENAVAM_VEICULO}</td>
          <td>{veiculo.ANO_VEICULO}</td>
          <td>{veiculo.PLACA_VEICULO}</td>
          <td>{veiculo.COMB_VEICULO}</td>
          <td>{veiculo.KM_TROCA_OLEO}</td>
          <td>{veiculo.KM_TROCA_PNEU}</td>
          <td>{veiculo.KM_REV_VEICULO}</td>
          <td>{veiculo.KM_LITRO_VEICULO}</td>
          <td>
            <Button color="success" size="sm" className="mr-2">
              Edit
            </Button>
            <Button color="danger" size="sm">
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return (
      <div className="page">
        <div className="sideBar">
          <Acordeao />
        </div>
        <div className="wrapper">
          <h2 className="font-weight-bold">Veículos</h2>
          <div>
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem tag="a" href="#">
                Home
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                Veiculos
              </BreadcrumbItem>
            </Breadcrumb>
          </div>
          <br />

          <Button color="primary" onClick={this.toggleNewVeicModal.bind(this)}>
            Adicionar Veiculo
          </Button>
          <Modal
            isOpen={this.state.NewVeicModal}
            toggle={this.toggleNewVeicModal.bind(this)}
          >
            <ModalHeader toggle={this.toggleNewVeicModal.bind(this)}>
              Adicionar Veiculo
            </ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={this.toggleNewVeicModal.bind(this)}
              >
                Do Something
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.toggleNewVeicModal.bind(this)}
              >
                Cancel
              </Button>
            </ModalFooter>
          </Modal>

          <Table className="table-bordered text-center">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Modelo</th>
                <th>Marca</th>
                <th>Renavam</th>
                <th>Ano</th>
                <th>Placa</th>
                <th>Combustivel</th>
                <th>Troca Oleo</th>
                <th>Troca Pneu</th>
                <th>Revisão</th>
                <th>Km/L</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{veiculos}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
