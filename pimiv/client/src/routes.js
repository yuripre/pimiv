import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import FormVeiculo from "./components/Veiculo";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/veiculos" component={FormVeiculo} />
      </Switch>
    </BrowserRouter>
  );
}
