import React, { Component, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./styles.css";
import api from "C:/Users/Yuri/Documents/pimiv/client/src/services/api";

export default function Login({ history }) {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await api.post("/authenticate", {
        username: username,
        senha: senha
      });

      history.push("/main");
    } catch (err) {
      alert("Login/Senha inválidos!");
    }
  }

  return (
    <Form onSubmit={submitHandler} className="loginForm">
      <h1>
        <span className="text-center font-weight-bolder">[+]ctrlfrota</span>
        .com
      </h1>
      <h2 className="text-center">Bem-vindo !</h2>
      <FormGroup>
        <Label>Username: </Label>
        <Input
          type="text"
          value={username}
          name="username"
          onChange={e => setUsername(e.target.value)}
          placeholder="Digite seu nome de usuário"
        />
      </FormGroup>
      <FormGroup>
        <Label>Senha: </Label>
        <Input
          type="password"
          value={senha}
          name="senha"
          onChange={e => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />
        <Button type="submit" className="btn-lg btn-dark btn-block mt-3">
          Login
        </Button>
      </FormGroup>
      <div className="linkzin text-center pt-3">
        <a href="/sign-up">Cadastrar</a>
        <span className="p-2">|</span>
        <a href="/forgot">Esqueci a senha</a>
      </div>
    </Form>
  );
}
