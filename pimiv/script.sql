CREATE SCHEMA DB_CTRLFROTA;
USE DB_CTRLFROTA;

CREATE TABLE TB_USUARIO (
  `ID_USUARIO` INT NOT NULL AUTO_INCREMENT,
  `NM_USUARIO` VARCHAR(255) NOT NULL,
  `LOGIN_USUARIO` VARCHAR(100) NOT NULL,
  `SENHA_USUARIO` VARCHAR(100) NOT NULL,
  `EMAIL_USUARIO` VARCHAR(300) NOT NULL,
  `PERFIL_USUARIO` VARCHAR(45) NOT NULL,
  `TEL_USUARIO` VARCHAR(13) NOT NULL,
  `CPF_USUARIO` VARCHAR(11) NOT NULL,
  PRIMARY KEY (`ID_USUARIO`));
  
  CREATE TABLE TB_CONDUTOR (
  `ID_CONDUTOR` INT NOT NULL AUTO_INCREMENT,
  `ID_USUARIO` INT NOT NULL,
  `CNH_CONDUTOR` VARCHAR(12) NOT NULL,
  `CAT_CONDUTOR` VARCHAR(2) NOT NULL,
  `DATA_VENC_CONDUTOR` DATE NOT NULL,
  PRIMARY KEY (`ID_CONDUTOR`),
  INDEX `FK_ID_USUARIO_CONDUTOR_idx` (`ID_USUARIO` ASC) VISIBLE,
  CONSTRAINT `FK_ID_USUARIO`
    FOREIGN KEY (`ID_USUARIO`)
    REFERENCES TB_USUARIO (`ID_USUARIO`));
    

CREATE TABLE TB_CLIENTE (
`ID_CLIENTE` INT NOT NULL AUTO_INCREMENT,
`NM_CLIENTE` VARCHAR(255) NOT NULL,
`CNPJ_CLIENTE` VARCHAR(15) NOT NULL,
`TEL_CLIENTE` VARCHAR (13) NOT NULL,
`EMAIL_CLIENTE` VARCHAR (300) NOT NULL,
`RS_CLIENTE` VARCHAR (255) NOT NULL,
`ID_USUARIO` INT NOT NULL,
PRIMARY KEY (`ID_CLIENTE`),
INDEX `FK_ID_USUARIO_CLIENTE_idx`(`ID_USUARIO` ASC) VISIBLE,
CONSTRAINT `FK_ID_USUARIOo`
	FOREIGN KEY (`ID_USUARIO`)
	REFERENCES TB_USUARIO (`ID_USUARIO`));
    
CREATE TABLE TB_SOLICITACAO (
`ID_SOLICITACAO` INT NOT NULL AUTO_INCREMENT,
`DEST_SOLICITACAO` VARCHAR(300) NOT NULL,
`DATA_SOLICITACAO` DATETIME NOT NULL,
`OBS_SOLICITACAO` VARCHAR(300),
`ID_CLIENTE` INT NOT NULL,
PRIMARY KEY (`ID_SOLICITACAO`),
INDEX `FK_ID_CLIENTE_SOLICITACAO_idx` (`ID_CLIENTE` ASC) VISIBLE,
CONSTRAINT `FK_ID_CLIENTE`
	FOREIGN KEY (`ID_CLIENTE`)
	REFERENCES TB_CLIENTE (`ID_CLIENTE`));
    

CREATE TABLE TB_VEICULO(
`ID_VEICULO` INT NOT NULL AUTO_INCREMENT,
`MOD_VEICULO` VARCHAR (255) NOT NULL,
`MAR_VEICULO` VARCHAR(255) NOT NULL,
`RENAVAM_VEICULO` VARCHAR (11) NOT NULL,
`ANO_VEICULO` INT NOT NULL,
`PLACA_VEICULO` VARCHAR (8) NOT NULL,
`COMB_VEICULO` VARCHAR(20) NOT NULL,
`KM_TROCA_OLEO` FLOAT NOT NULL,
`KM_TROCA_PNEU` FLOAT NOT NULL,
`KM_REV_VEICULO` FLOAT NOT NULL,
`KM_LITRO_VEICULO` FLOAT NOT NULL,
PRIMARY KEY (`ID_VEICULO`));

CREATE TABLE TB_SINISTRO(
`ID_SINISTRO` INT NOT NULL AUTO_INCREMENT,
`LOCAL_SINISTRO` VARCHAR (255) NOT NULL,
`DATA_SINISTRO` DATETIME NOT NULL,
`DESC_SINISTRO` TEXT NOT NULL,
`ID_CONDUTOR` INT NOT NULL,
`ID_VEICULO` INT NOT NULL,
PRIMARY KEY (`ID_SINISTRO`),
INDEX `FK_ID_CONDUTOR_SINISTRO_idx` (`ID_CONDUTOR` ASC) VISIBLE,
INDEX `FK_ID_VEICULO_SINISTRO_idx` (`ID_VEICULO` ASC) VISIBLE,
CONSTRAINT `FK_ID_CONDUTOR`
	FOREIGN KEY (`ID_CONDUTOR`)
	REFERENCES TB_CONDUTOR (`ID_CONDUTOR`),
CONSTRAINT `FK_ID_VEICULO`
	FOREIGN KEY (`ID_VEICULO`)
	REFERENCES TB_VEICULO (`ID_VEICULO`));


CREATE TABLE TB_VIAGEM (
`ID_VIAGEM` INT NOT NULL AUTO_INCREMENT,
`DATA_SAIDA_VIAGEM` DATETIME NOT NULL,
`DATA_CHEGADA_VIAGEM` DATETIME NOT NULL,
`KM_INICIAL_VIAGEM` FLOAT NOT NULL,
`KM_FINAL_VIAGEM` FLOAT NOT NULL,
`FRETE_VIAGEM` FLOAT NOT NULL,
`ID_VEICULO` INT NOT NULL,
PRIMARY KEY (`ID_VIAGEM`),
INDEX `FK_ID_VEICULO_VIAGEM_idx` (`ID_VEICULO` ASC) VISIBLE,
CONSTRAINT `FK_ID_VEICULO_VIAGEM`
	FOREIGN KEY (`ID_VEICULO`)
	REFERENCES TB_VEICULO (`ID_VEICULO`));


CREATE TABLE TB_ALUGUEL (
ID_ALUGUEL INT NOT NULL AUTO_INCREMENT,
ID_CLIENTE INT NOT NULL,
DATA_INICIO_ALUGUEL DATETIME NOT NULL,
DATA_FIM_ALUGUEL DATETIME NOT NULL,
OBS_ALUGUEL VARCHAR(300),
VL_ALGUEL FLOAT NOT NULL,
PRIMARY KEY (ID_ALUGUEL),
INDEX FK_ID_CLIENTE_ALUGUEL_idx (ID_CLIENTE ASC) VISIBLE,
CONSTRAINT FK_ID_CLIENTE_ALUGUEL
	FOREIGN KEY (ID_CLIENTE)
    REFERENCES TB_CLIENTE (ID_CLIENTE));
    
CREATE TABLE TB_ITENS_ALUGUEL(
ID_ITEM INT NOT NULL AUTO_INCREMENT,
ID_ALUGUEL INT NOT NULL,
PLACA_VEIC_ALUGUEL VARCHAR(8) NOT NULL,
MOD_VEIC_ALUGUEL VARCHAR(300) NOT NULL,
VL_DIARIA_ALUGUEL FLOAT NOT NULL,
PRIMARY KEY (ID_ITEM),
INDEX FK_ID_ALUGUEL_idx (ID_ALUGUEL ASC) VISIBLE,
CONSTRAINT FK_ID_ALUGUEL
	FOREIGN KEY (ID_ALUGUEL)
    REFERENCES TB_ALUGUEL (ID_ALUGUEL));
    
CREATE TABLE TB_MULTA (
ID_MULTA INT NOT NULL AUTO_INCREMENT,
ID_CONDUTOR INT NOT NULL,
ID_VEICULO INT NOT NULL,
DATA_MULTA DATETIME NOT NULL,
LOCAL_MULTA VARCHAR(300) NOT NULL,
OBS_MULTA VARCHAR(300),
VALOR_MULTA FLOAT NOT NULL,
TIPO_MULTA VARCHAR(45),
PRIMARY KEY (ID_MULTA),
INDEX FK_ID_CONDUTOR_MULTA_idx (ID_CONDUTOR ASC) VISIBLE,
INDEX FK_ID_VEICULO_MULTA_idx (ID_VEICULO ASC) VISIBLE,
CONSTRAINT FK_ID_CONDUTOR_MULTA	
	FOREIGN KEY (ID_CONDUTOR)
    REFERENCES TB_CONDUTOR (ID_CONDUTOR),
CONSTRAINT FK_ID_VEICULO_MULTA
	FOREIGN KEY (ID_VEICULO)
    REFERENCES TB_VEICULO (ID_VEICULO));

CREATE TABLE TB_OFICINA(
ID_OFICINA INT NOT NULL AUTO_INCREMENT,
NM_OFICINA VARCHAR(255) NOT NULL,
CNPJ_OFICINA VARCHAR(15) NOT NULL,
END_OFICINA VARCHAR(300) NOT NULL,
TEL_OFICINA VARCHAR (13) NOT NULL,
RS_OFICINA VARCHAR (255) NOT NULL,
OBS_OFICINA VARCHAR (300),
PRIMARY KEY (ID_OFICINA));

CREATE TABLE TB_MANUTENCAO(
ID_MANUTENCAO INT NOT NULL AUTO_INCREMENT,
DATA_ENTRA_MANUTENCAO DATETIME NOT NULL,
DATA_SAIDA_MANUTENCAO DATETIME NOT NULL,
MOT_MANUTENCAO VARCHAR(255) NOT NULL,
OBS_MANUTENCAO VARCHAR(300),
ID_VEICULO INT NOT NULL,
ID_OFICINA INT NOT NULL,
PRIMARY KEY (ID_MANUTENCAO),
INDEX FK_ID_VEICULO_MANUTENCAO_idx (ID_VEICULO ASC) VISIBLE,
INDEX FK_ID_OFICINA_MANUTENCAO_idx (ID_OFICINA ASC) VISIBLE,
CONSTRAINT FK_ID_VEICULO_MANUTENCAO
	FOREIGN KEY (ID_VEICULO)
    REFERENCES TB_VEICULO (ID_VEICULO),
CONSTRAINT FK_ID_OFICINA_MANUTENCAO
	FOREIGN KEY (ID_OFICINA)
    REFERENCES TB_OFICINA (ID_OFICINA));
    
CREATE TABLE TB_PECA(
ID_PECA INT NOT NULL AUTO_INCREMENT,
DESC_PECA VARCHAR(300) NOT NULL,
VL_PECA FLOAT NOT NULL,
QTD_PECA INT NOT NULL,
ALOC_PECA BOOLEAN NOT NULL,
ID_VEICULO INT,
PRIMARY KEY (ID_PECA),
INDEX FK_ID_VEICULO_PECA_idx (ID_VEICULO ASC) VISIBLE,
CONSTRAINT FK_ID_VEICULO_PECA
	FOREIGN KEY (ID_VEICULO)
    REFERENCES TB_VEICULO (ID_VEICULO));

CREATE TABLE TB_POSTO(
ID_POSTO INT NOT NULL AUTO_INCREMENT,
NM_POSTO VARCHAR(300) NOT NULL,
RS_POSTO VARCHAR(300) NOT NULL,
CNPJ_POSTO VARCHAR(15) NOT NULL,
END_POSTO VARCHAR(300),
TEL_POSTO VARCHAR(13),
OBS_POSTO VARCHAR (300),
PRIMARY KEY (ID_POSTO));

CREATE TABLE TB_ABASTECIMENTO(
ID_ABASTECIMENTO INT NOT NULL AUTO_INCREMENT,
DATA_ABASTECIMENTO DATETIME NOT NULL,
VL_ABASTECIMENTO FLOAT,
KM_ABASTECIMENTO FLOAT,
LITROS_ABASTECIMENTO FLOAT,
ID_VEICULO INT NOT NULL,
ID_POSTO INT NOT NULL,
PRIMARY KEY (ID_ABASTECIMENTO),
INDEX FK_ID_VEICULO_ABASTECIMENTO_idx (ID_VEICULO ASC) VISIBLE,
INDEX FK_ID_POSTO_ABASTECIMENTO_idx (ID_POSTO ASC) VISIBLE,
CONSTRAINT FK_ID_VEICULO_ABASTECIMENTO
	FOREIGN KEY (ID_VEICULO)
    REFERENCES TB_VEICULO (ID_VEICULO),
CONSTRAINT FK_ID_POSTO__ABASTECIMENTO
	FOREIGN KEY (ID_POSTO)
    REFERENCES TB_POSTO (ID_POSTO));
