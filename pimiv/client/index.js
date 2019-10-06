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
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

export default class FormVeiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      veiculos: [],
      NewVeicModal: false,
      editVeicModal: false,
      newVeicData: {
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
      }
    };

    /*
     */
  }

  componentDidMount() {
    this._atualizaVeiculos();
  }

  _atualizaVeiculos() {
    axios.get("http://localhost:3333/veiculos").then(response => {
      this.setState({
        veiculos: response.data
      });
    });
  }

  toggleNewVeicModal() {
    this.setState({
      NewVeicModal: !this.state.NewVeicModal
    });
  }

  toggleeditVeicModal() {
    this.setState({
      editVeicModal: !this.state.editVeicModal
    });
  }
  deleteVeic(ID_VEICULO) {
    axios
      .delete("http://localhost:3333/veiculos/" + ID_VEICULO)
      .then(response => {
        this._atualizaVeiculos();
        this.setState();
      });
  }
  addVeic() {
    axios
      .post("http://localhost:3333/veiculos", this.state.newVeicData)
      .then(response => {
        this._atualizaVeiculos();
        this.setState({
          NewVeicModal: false,
          newVeicData: {
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
          }
        });

        alert("Veículo incluído com sucesso");
      })
      .catch(error => {
        console.log(error);
      });
  }

  editVeic(
    ID_VEICULO,
    MOD_VEICULO,
    MAR_VEICULO,
    RENAVAM_VEICULO,
    ANO_VEICULO,
    PLACA_VEICULO,
    COMB_VEICULO,
    KM_TROCA_OLEO,
    KM_TROCA_PNEU,
    KM_REV_VEICULO,
    KM_LITRO_VEICULO
  ) {
    this.setState({
      editVeicModal: !this.state.editVeicModal,
      editVeicData: {
        ID_VEICULO,
        MOD_VEICULO,
        MAR_VEICULO,
        RENAVAM_VEICULO,
        ANO_VEICULO,
        PLACA_VEICULO,
        COMB_VEICULO,
        KM_TROCA_OLEO,
        KM_TROCA_PNEU,
        KM_REV_VEICULO,
        KM_LITRO_VEICULO
      }
    });
  }

  atualizarVeic() {
    let {
      MOD_VEICULO,
      MAR_VEICULO,
      RENAVAM_VEICULO,
      ANO_VEICULO,
      PLACA_VEICULO,
      COMB_VEICULO,
      KM_TROCA_OLEO,
      KM_TROCA_PNEU,
      KM_REV_VEICULO,
      KM_LITRO_VEICULO
    } = this.state.editVeicData;

    axios
      .put(
        "http://localhost:3333/veiculos/" + this.state.editVeicData.ID_VEICULO,
        {
          MOD_VEICULO,
          MAR_VEICULO,
          RENAVAM_VEICULO,
          ANO_VEICULO,
          PLACA_VEICULO,
          COMB_VEICULO,
          KM_TROCA_OLEO,
          KM_TROCA_PNEU,
          KM_REV_VEICULO,
          KM_LITRO_VEICULO
        }
      )
      .then(response => {
        this._atualizaVeiculos();
        this.setState({
          editVeicModal: false,
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
          }
        });
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
          <td className="">
            <Button
              color="success"
              size="sm"
              className="mr-2"
              onClick={this.editVeic.bind(
                this,
                veiculo.ID_VEICULO,
                veiculo.MOD_VEICULO,
                veiculo.MAR_VEICULO,
                veiculo.RENAVAM_VEICULO,
                veiculo.ANO_VEICULO,
                veiculo.PLACA_VEICULO,
                veiculo.COMB_VEICULO,
                veiculo.KM_TROCA_OLEO,
                veiculo.KM_TROCA_PNEU,
                veiculo.KM_REV_VEICULO,
                veiculo.KM_LITRO_VEICULO
              )}
            >
              Edit
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={this.deleteVeic.bind(this, veiculo.ID_VEICULO)}
            >
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
        <div className="wrapper pl-1">
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
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Modelo do Veículo</Label>
                      <Input
                        type="text"
                        name="MOD_VEICULO"
                        id="MOD_VEICULO"
                        value={this.state.newVeicData.MOD_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.MOD_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                        placeholder="Modelo do Veículo "
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Marca</Label>
                      <Input
                        type="text"
                        name="MAR_VEICULO"
                        id="MAR_VEICULO"
                        value={this.state.newVeicData.MAR_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.MAR_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                        placeholder="Marca do Veículo"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Renavam</Label>
                      <Input
                        type="text"
                        name="RENAVAM_VEICULO"
                        id="RENAVAM_VEICULO"
                        value={this.state.newVeicData.RENAVAM_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.RENAVAM_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                        placeholder="nº RENAVAM"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Ano</Label>
                      <Input
                        type="text"
                        name="ANO_VEICULO"
                        id="ANO_VEICULO"
                        value={this.state.newVeicData.ANO_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.ANO_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                        placeholder="Ano do Veículo"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Placa</Label>
                      <Input
                        type="text"
                        name="PLACA_VEICULO"
                        id="PLACA_VEICULO"
                        value={this.state.newVeicData.PLACA_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.PLACA_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                        placeholder="XXX -1234"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>Combustivel</Label>
                  <Input
                    type="select"
                    name="COMB_VEICULO"
                    id="COMB_VEICULO"
                    value={this.state.newVeicData.COMB_VEICULO}
                    onChange={e => {
                      let { newVeicData } = this.state;

                      newVeicData.COMB_VEICULO = e.target.value;

                      this.setState({ newVeicData });
                    }}
                  >
                    <option value=""></option>
                    <option>Óleo Diesel</option>
                    <option>Etanol</option>
                    <option>Gasolina</option>
                    <option>Flex</option>
                    <option>GNV</option>
                  </Input>
                </FormGroup>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Troca de Óleo</Label>
                      <Input
                        type="number"
                        name="KM_TROCA_OLEO"
                        id="KM_TROCA_OLEO"
                        value={this.state.newVeicData.KM_TROCA_OLEO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.KM_TROCA_OLEO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Troca Pneus</Label>
                      <Input
                        type="number"
                        name="KM_TROCA_PNEU"
                        id="KM_TROCA_PNEU"
                        value={this.state.newVeicData.KM_TROCA_PNEU}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.KM_TROCA_PNEU = e.target.value;

                          this.setState({ newVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Revisão</Label>
                      <Input
                        type="number"
                        name="KM_REV_VEICULO"
                        id="KM_REV_VEICULO"
                        value={this.state.newVeicData.KM_REV_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.KM_REV_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km/L</Label>
                      <Input
                        type="number"
                        name="KM_LITRO_VEICULO"
                        id="KM_LITRO_VEICULO"
                        value={this.state.newVeicData.KM_LITRO_VEICULO}
                        onChange={e => {
                          let { newVeicData } = this.state;

                          newVeicData.KM_LITRO_VEICULO = e.target.value;

                          this.setState({ newVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addVeic.bind(this)}>
                Salvar
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.toggleNewVeicModal.bind(this)}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            isOpen={this.state.editVeicModal}
            toggle={this.toggleeditVeicModal.bind(this)}
          >
            <ModalHeader toggle={this.toggleeditVeicModal.bind(this)}>
              Adicionar Veiculo
            </ModalHeader>
            <ModalBody>
              <Form>
                <Row form>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Modelo do Veículo</Label>
                      <Input
                        type="text"
                        name="MOD_VEICULO"
                        id="MOD_VEICULO"
                        value={this.state.editVeicData.MOD_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.MOD_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                        placeholder="Modelo do Veículo "
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Marca</Label>
                      <Input
                        type="text"
                        name="MAR_VEICULO"
                        id="MAR_VEICULO"
                        value={this.state.editVeicData.MAR_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.MAR_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                        placeholder="Marca do Veículo"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Renavam</Label>
                      <Input
                        type="text"
                        name="RENAVAM_VEICULO"
                        id="RENAVAM_VEICULO"
                        value={this.state.editVeicData.RENAVAM_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.RENAVAM_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                        placeholder="nº RENAVAM"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Ano</Label>
                      <Input
                        type="text"
                        name="ANO_VEICULO"
                        id="ANO_VEICULO"
                        value={this.state.editVeicData.ANO_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.ANO_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                        placeholder="Ano do Veículo"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label>Placa</Label>
                      <Input
                        type="text"
                        name="PLACA_VEICULO"
                        id="PLACA_VEICULO"
                        value={this.state.editVeicData.PLACA_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.PLACA_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                        placeholder="XXX -1234"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label>Combustivel</Label>
                  <Input
                    type="select"
                    name="COMB_VEICULO"
                    id="COMB_VEICULO"
                    value={this.state.editVeicData.COMB_VEICULO}
                    onChange={e => {
                      let { editVeicData } = this.state;

                      editVeicData.COMB_VEICULO = e.target.value;

                      this.setState({ editVeicData });
                    }}
                  >
                    <option value=""></option>
                    <option>Óleo Diesel</option>
                    <option>Etanol</option>
                    <option>Gasolina</option>
                    <option>Flex</option>
                    <option>GNV</option>
                  </Input>
                </FormGroup>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Troca de Óleo</Label>
                      <Input
                        type="number"
                        name="KM_TROCA_OLEO"
                        id="KM_TROCA_OLEO"
                        value={this.state.editVeicData.KM_TROCA_OLEO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.KM_TROCA_OLEO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Troca Pneus</Label>
                      <Input
                        type="number"
                        name="KM_TROCA_PNEU"
                        id="KM_TROCA_PNEU"
                        value={this.state.editVeicData.KM_TROCA_PNEU}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.KM_TROCA_PNEU = e.target.value;

                          this.setState({ editVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km. Revisão</Label>
                      <Input
                        type="number"
                        name="KM_REV_VEICULO"
                        id="KM_REV_VEICULO"
                        value={this.state.editVeicData.KM_REV_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.KM_REV_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={5}>
                    <FormGroup>
                      <Label>Km/L</Label>
                      <Input
                        type="number"
                        name="KM_LITRO_VEICULO"
                        id="KM_LITRO_VEICULO"
                        value={this.state.editVeicData.KM_LITRO_VEICULO}
                        onChange={e => {
                          let { editVeicData } = this.state;

                          editVeicData.KM_LITRO_VEICULO = e.target.value;

                          this.setState({ editVeicData });
                        }}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.atualizarVeic.bind(this)}>
                Atualizar
              </Button>{" "}
              <Button
                color="secondary"
                onClick={this.toggleeditVeicModal.bind(this)}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>

          <Table className="table-bordered text-center mt-4">
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
