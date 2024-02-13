-- init-postgres.sql

-- Criação da tabela "clientes" e inserção de alguns dados mockados
CREATE DATABASE clientes;

\c clientes;

CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  cpf VARCHAR(255),
  cnpj VARCHAR(255),
  ispb VARCHAR(255),
  issuer VARCHAR(255),
  number VARCHAR(255),
  accounttype VARCHAR(255),
  pix VARCHAR(255)
);

INSERT INTO clientes (name, email, cpf, cnpj, ispb, issuer, number, accounttype, pix) VALUES
  ('joao', 'joao@example.com', '12345678901', '', '12345678', '0001', '1234567', 'CC', '11999999999'),
  ('maria', 'maria@example.com', '12345678902', '', '12345678', '0001', '2222222', 'CC', '12345678902'),
  ('zezinho', 'zezinho@example.com', '12345678903', '50685362000135', '12345678', '0001', '3333333', 'CC', 'zezinho@example.com');
