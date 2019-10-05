import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import axios from "axios";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomecompleto: "",
      username: "",
      senha: "",
      email: "",
      perfil: "",
      cpf: "",
      telefone: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post(`http://localhost:3333/usuarios`, this.state)
      .then(response => {
        console.log(response);
        alert("Usuário Incluido com sucesso");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      nomecompleto,
      username,
      senha,
      email,
      perfil,
      cpf,
      telefone
    } = this.state;
    return (
      <Form onSubmit={this.submitHandler} className="signupForm">
        <h1>
          <span className="text-center font-weight-bolder">[+]ctrlfrota</span>
          .com
        </h1>
        <h4 className="text-center">Preencha o formulário: </h4>
        <FormGroup>
          <Label>Nome completo: </Label>
          <Input
            type="text"
            name="nomecompleto"
            value={nomecompleto}
            onChange={this.changeHandler}
            placeholder="Digite seu nome completo"
          />
        </FormGroup>
        <FormGroup>
          <Label>Nome de usuário: </Label>
          <Input
            type="text"
            value={username}
            name="username"
            onChange={this.changeHandler}
            placeholder="Defina seu nome de usuário"
          />
        </FormGroup>
        <FormGroup>
          <Label>Senha: </Label>
          <Input
            type="password"
            name="senha"
            onChange={this.changeHandler}
            value={senha}
            placeholder="Defina sua senha"
          />
        </FormGroup>
        <FormGroup>
          <Label>E-mail: </Label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
            placeholder="Digite seu e-mail"
          />
        </FormGroup>
        <FormGroup>
          <Label>Select</Label>
          <Input
            type="select"
            value={perfil}
            onChange={this.changeHandler}
            name="perfil"
          >
            <option>Usuário Padrão</option>
            <option>Condutor</option>
            <option>Admin</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Telefone: </Label>
          <Input
            type="text"
            name="telefone"
            value={telefone}
            onChange={this.changeHandler}
            placeholder="Digite seu número de telefone"
          />
        </FormGroup>
        <FormGroup>
          <Label>CPF: </Label>
          <Input
            type="text"
            name="cpf"
            value={cpf}
            onChange={this.changeHandler}
            placeholder="Digite seu número de CPF"
          />
        </FormGroup>
        <Button type="submit" className="btn-block">
          Cadastrar
        </Button>
      </Form>
    );
  }
}
