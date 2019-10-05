const express = require("express");
const mySQL = require("mysql");

const routes = express.Router();

var connection = mySQL.createConnection({
  host: "localhost",
  user: "root",
  password: "unknown69",
  database: "db_ctrlfrota"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});

routes.post("/authenticate", async function(req, res) {
  const { username, senha } = req.body;

  connection.query(
    "select LOGIN_USUARIO, SENHA_USUARIO from tb_usuario where LOGIN_USUARIO = ?",
    username,
    function(err, rows, fields) {
      if (err) res.status(400).json(err);
      else if (rows.length == 0)
        res.status(400).json({ error: "Login não encontrado!" });
      else if (senha != rows[0].SENHA_USUARIO)
        res.status(400).json({ error: "Senha inválida!" });
      else {
        res.status(200).send({
          rows
        });
      }
    }
  );
});

//rotas TB_VEICULOS

routes.get("/veiculos", (req, res) => {
  connection.query("select * from tb_veiculo", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/veiculos/:id", (req, res) => {
  connection.query(
    "select * from TB_VEICULO where id_veiculo = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/veiculos", (req, res) => {
  connection.query(
    "insert TB_VEICULO (MOD_VEICULO, MAR_VEICULO, RENAVAM_VEICULO, ANO_VEICULO, PLACA_VEICULO, COMB_VEICULO, KM_TROCA_OLEO, KM_TROCA_PNEU, KM_REV_VEICULO, KM_LITRO_VEICULO) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.MOD_VEICULO,
      req.body.MAR_VEICULO,
      req.body.RENAVAM_VEICULO,
      req.body.ANO_VEICULO,
      req.body.PLACA_VEICULO,
      req.body.COMB_VEICULO,
      req.body.KM_TROCA_OLEO,
      req.body.KM_TROCA_PNEU,
      req.body.KM_REV_VEICULO,
      req.body.KM_LITRO_VEICULO
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/veiculos/:id", (req, res) => {
  connection.query(
    "update TB_VEICULO set ? where id_veiculo = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/veiculos/:id", (req, res) => {
  connection.query(
    "delete from TB_VEICULO where id_veiculo = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_VIAGENS

routes.get("/viagens", (req, res) => {
  connection.query("select * from tb_vIAGEM", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/viagens/:id", (req, res) => {
  connection.query(
    "select * from TB_VIAGEM where id_viagem = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/viagens", (req, res) => {
  connection.query(
    "insert TB_VIAGEM (DESTINO_VIAGEM, DATA_SAIDA_VIAGEM, DATA_CHEGADA_VIAGEM, KM_INICIAL_VIAGEM, KM_FINAL_VIAGEM, FRETE_VIAGEM) values (?, ?, ?, ?, ?, ?)",
    [
      req.body.DESTINO_VIAGEM,
      req.body.DATA_SAIDA_VIAGEM,
      req.body.DATA_CHEGADA_VIAGEM,
      req.body.KM_INICIAL_VIAGEM,
      req.body.KM_FINAL_VIAGEM,
      req.body.FRETE_VIAGEM
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/viagens/:id", (req, res) => {
  connection.query(
    "update TB_VIAGEM set ? where id_viagem = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/viagens/:id", (req, res) => {
  connection.query(
    "delete from TB_VIAGEM where id_viagem = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_CONDUTOR

routes.get("/condutores", (req, res) => {
  connection.query("select * from tb_condutor", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/condutores/:id", (req, res) => {
  connection.query(
    "select * from tb_condutor where id_condutor = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/condutores", (req, res) => {
  connection.query(
    "insert tb_condutor (CNH_CONDUTOR, CAT_CONDUTOR, DATA_VENC_CONDUTOR) values (?, ?, ?)",
    [req.body.CNH_CONDUTOR, req.body.CAT_CONDUTOR, req.body.DATA_VENC_CONDUTOR],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/condutores/:id", (req, res) => {
  connection.query(
    "update tb_condutor set ? where id_condutor = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/condutores/:id", (req, res) => {
  connection.query(
    "delete from tb_condutor where id_condutor = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_CLIENTE

routes.get("/clientes", (req, res) => {
  connection.query("select * from tb_cliente", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/clientes/:id", (req, res) => {
  connection.query(
    "select * from tb_cliente where id_cliente = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/clientes", (req, res) => {
  connection.query(
    "insert tb_cliente (NM_CLIENTE, CNPJ_CLIENTE, TEL_CLIENTE, EMAIL_CLIENTE, RS_CLIENTE) values (?, ?, ?, ?, ?)",
    [
      req.body.NM_CLIENTE,
      req.body.CNPJ_CLIENTE,
      req.body.TEL_CLIENTE,
      req.body.EMAIL_CLIENTE,
      req.body.RS_CLIENTE
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/clientes/:id", (req, res) => {
  connection.query(
    "update tb_cliente set ? where id_cliente = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/clientes/:id", (req, res) => {
  connection.query(
    "delete from tb_cliente where id_cliente = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

// rotas TB_USUARIO

routes.get("/usuarios", (req, res) => {
  connection.query("select * from tb_usuario", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/usuarios/:id", (req, res) => {
  connection.query(
    "select * from tb_usuario where id_usuario = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/usuarios", (req, res) => {
  connection.query(
    "insert tb_usuario (NM_USUARIO, LOGIN_USUARIO, SENHA_USUARIO, EMAIL_USUARIO, PERFIL_USUARIO, TEL_USUARIO, CPF_USUARIO) values (?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.nomecompleto,
      req.body.username,
      req.body.senha,
      req.body.email,
      req.body.perfil,
      req.body.telefone,
      req.body.cpf
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/usuarios/:id", (req, res) => {
  connection.query(
    "update tb_usuario set ? where id_usuario = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/usuarios/:id", (req, res) => {
  connection.query(
    "delete from tb_usuario where id_usuario = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_ABASTECIMENTO

routes.get("/abastecimentos", (req, res) => {
  connection.query("select * from tb_abastecimento", function(
    err,
    rows,
    field
  ) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/abastecimentos/:id", (req, res) => {
  connection.query(
    "select * from tb_abastecimento where id_abastecimento = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/abastecimentos", (req, res) => {
  connection.query(
    "insert tb_abastecimento (DATA_ABASTECIMENTO, VL_ABASTECIMENTO, KM_ABASTECIMENTO, LITROS_ABASTECIMENTO, ID_VEICULO, ID_POSTO) values (?, ?, ?, ?, ?, ?)",
    [
      req.body.DATA_ABASTECIMENTO,
      req.body.VL_ABASTECIMENTO,
      req.body.KM_ABASTECIMENTO,
      req.body.LITROS_ABASTECIMENTO,
      req.body.ID_VEICULO,
      req.body.ID_POSTO
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/abastecimentos/:id", (req, res) => {
  connection.query(
    "update tb_abastecimento set ? where id_abastecimento = ?"[
      (req.body, req.params.id)
    ],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/abastecimentos/:id", (req, res) => {
  connection.query(
    "delete from tb_abastecimento where id_abastecimento = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas tb_aluguel

routes.get("/alugueis", (req, res) => {
  connection.query("select * from tb_aluguel", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/alugueis/:id", (req, res) => {
  connection.query(
    "select * from tb_aluguel where id_aluguel = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/alugueis", (req, res) => {
  connection.query(
    "insert tb_aluguel (ID_CLIENTE, DATA_INICIO_ALUGUEL, DATA_FIM_ALUGUEL, OBS_ALUGUEL, VL_ALGUEL) values (?, ?, ?, ?, ?)",
    [
      req.body.ID_CLIENTE,
      req.body.DATA_INICIO_ALUGUEL,
      req.body.DATA_FIM_ALUGUEL,
      req.body.OBS_ALUGUEL,
      req.body.VL_ALGUEL
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/alugueis/:id", (req, res) => {
  connection.query(
    "update tb_aluguel set ? where id_aluguel = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/alugueis/:id", (req, res) => {
  connection.query(
    "delete from tb_aluguel where id_aluguel = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_ITENS_ALUGUEL

routes.get("/itensaluguel", (req, res) => {
  connection.query("select * from tb_itens_aluguel", function(
    err,
    rows,
    field
  ) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/itensaluguel/:id", (req, res) => {
  connection.query(
    "select * from tb_itens_aluguel where id_item = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/itensaluguel", (req, res) => {
  connection.query(
    "insert tb_itens_aluguel (ID_ALUGUEL, PLACA_VEIC_ALUGUEL, MOD_VEIC_ALUGUEL, VL_DIARIA_ALUGUEL) values (?, ?, ?, ?)",
    [
      req.body.ID_ALUGUEL,
      req.body.PLACA_VEIC_ALUGUEL,
      req.body.MOD_VEIC_ALUGUEL,
      req.body.VL_DIARIA_ALUGUEL
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/itensaluguel/:id", (req, res) => {
  connection.query(
    "update tb_itens_aluguel set ? where id_item = ?"[
      (req.body, req.params.id)
    ],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/itensaluguel/:id", (req, res) => {
  connection.query(
    "delete from tb_itens_aluguel where id_item = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas multas

routes.get("/multas", (req, res) => {
  connection.query("select * from tb_multa", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/multas/:id", (req, res) => {
  connection.query(
    "select * from tb_multa where id_multa = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/multas", (req, res) => {
  connection.query(
    "insert tb_multa (ID_CONDUTOR, ID_VEICULO, DATA_MULTA, LOCAL_MULTA, OBS_MULTA, VALOR_MULTA, TIPO_MULTA) values (?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.ID_CONDUTOR,
      req.body.ID_VEICULO,
      req.body.DATA_MULTA,
      req.body.LOCAL_MULTA,
      req.body.OBS_MULTA,
      req.body.VALOR_MULTA,
      req.body.TIPO_MULTA
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/multas/:id", (req, res) => {
  connection.query(
    "update tb_multa set ? where id_multa = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/multas/:id", (req, res) => {
  connection.query(
    "delete from tb_multa where id_multa = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_SOLICITAÇÃO

routes.get("/solicitacoes", (req, res) => {
  connection.query("select * from tb_solicitacao", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/solicitacoes/:id", (req, res) => {
  connection.query(
    "select * from tb_solicitacao where id_solicitacao = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/solicitacoes", (req, res) => {
  connection.query(
    "insert tb_solicitacao (DEST_SOLICITACAO, DATA_SOLICITACAO, OBS_SOLICITACAO, ID_CLIENTE) values (?, ?, ?, ?)",
    [
      req.body.DEST_SOLICITACAO,
      req.body.DATA_SOLICITACAO,
      req.body.OBS_SOLICITACAO,
      req.body.ID_CLIENTE
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/solicitacoes/:id", (req, res) => {
  connection.query(
    "update tb_solicitacao set ? where id_solicitacao = ?"[
      (req.body, req.params.id)
    ],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/solicitacoes/:id", (req, res) => {
  connection.query(
    "delete from tb_solicitacao where id_solicitacao = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_SINISTRO

routes.get("/sinistros", (req, res) => {
  connection.query("select * from tb_sinistro", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/sinistros/:id", (req, res) => {
  connection.query(
    "select * from tb_sinistro where id_sinistro = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/sinistros", (req, res) => {
  connection.query(
    "insert tb_sinistro (LOCAL_SINISTRO, DATA_SINISTRO, DESC_SINISTRO, ID_CONDUTOR, ID_VEICULO) values (?, ?, ?, ?)",
    [
      req.body.LOCAL_SINISTRO,
      req.body.DATA_SINISTRO,
      req.body.DESC_SINISTRO,
      req.body.ID_CONDUTOR,
      req.body.ID_VEICULO
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/sinistros/:id", (req, res) => {
  connection.query(
    "update tb_sinistro set ? where id_sinistro = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/sinistros/:id", (req, res) => {
  connection.query(
    "delete from tb_sinistro where id_sinistro = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_POSTO

routes.get("/postos", (req, res) => {
  connection.query("select * from tb_posto", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/postos/:id", (req, res) => {
  connection.query(
    "select * from tb_posto where id_posto = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/postos", (req, res) => {
  connection.query(
    "insert tb_posto (NM_POSTO, RS_POSTO, CNPJ_POSTO, END_POSTO, TEL_POSTO, OBS_POSTO) values (?, ?, ?, ?)",
    [
      req.body.NM_POSTO,
      req.body.RS_POSTO,
      req.body.CNPJ_POSTO,
      req.body.END_POSTO,
      req.body.TEL_POSTO,
      req.body.OBS_POSTO
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/postos/:id", (req, res) => {
  connection.query(
    "update tb_posto set ? where id_posto = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/postos/:id", (req, res) => {
  connection.query(
    "delete from tb_posto where id_posto = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_PECA

routes.get("/pecas", (req, res) => {
  connection.query("select * from tb_peca", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/pecas/:id", (req, res) => {
  connection.query(
    "select * from tb_peca where id_peca = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/pecas", (req, res) => {
  connection.query(
    "insert tb_peca (DESC_PECA, VL_PECA, QTD_PECA, ALOC_PECA, ID_VEICULO) values (?, ?, ?, ?)",
    [
      req.body.DESC_PECA,
      req.body.VL_PECA,
      req.body.QTD_PECA,
      req.body.ALOC_PECA,
      req.body.ID_VEICULO
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/pecas/:id", (req, res) => {
  connection.query(
    "update tb_peca set ? where id_peca = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/pecas/:id", (req, res) => {
  connection.query(
    "delete from tb_peca where id_peca = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

//rotas TB_OFICINA

routes.get("/oficinas", (req, res) => {
  connection.query("select * from tb_oficina", function(err, rows, field) {
    if (!err) res.json(rows);
    else res.json(err);
  });
});

routes.get("/oficinas/:id", (req, res) => {
  connection.query(
    "select * from tb_oficina where id_oficina = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.post("/oficinas", (req, res) => {
  connection.query(
    "insert tb_oficina (NM_OFICINA, CNPJ_OFICINA, END_OFICINA, TEL_OFICINA, RS_OFICINA, OBS_OFICINA) values (?, ?, ?, ?)",
    [
      req.body.NM_OFICINA,
      req.body.CNPJ_OFICINA,
      req.body.END_OFICINA,
      req.body.TEL_OFICINA,
      req.body.RS_OFICINA,
      req.body.OBS_OFICINA
    ],
    function(err, rows, fields) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.put("/oficinas/:id", (req, res) => {
  connection.query(
    "update tb_oficina set ? where id_oficina = ?"[(req.body, req.params.id)],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

routes.delete("/oficinas/:id", (req, res) => {
  connection.query(
    "delete from tb_oficina where id_oficina = ?",
    [req.params.id],
    function(err, rows, field) {
      if (!err) res.json(rows);
      else res.json(err);
    }
  );
});

module.exports = routes;
