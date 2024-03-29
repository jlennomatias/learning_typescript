# learning_typescript

Um simples projeto de cadastro de usuários utilizando PostgreSQL, MongoDB, Express e TypeScript.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (certifique-se de ter o MongoDB instalado e em execução)
- [PostgreSQL](https://www.postgresql.org/download/) (certifique-se de ter o MongoDB instalado e em execução)

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/jlennomatias/learning_typescript

2. Navegue até o diretório do projeto:

   ```bash
   cd learning_typescript

3. Instale as dependências:

   ```bash
   npm install

4. Instale o mongo no docker, conforme arquivo no diretório:
    ./container/mongo+prisma.txt

5. Instale o postgressql no docker:
  ./container/ docker-compose up -d

## Desenvolvimento

Execute o projeto em modo de desenvolvimento:

     ```bash
     npm run dev

## Estrutura do projeto

- `./server`: É a página que o express inicia o servidor
- `./src/index`: É a página que o express usa para montar o app, rotas e banco de dados.
- `./src/routes/index`: É a página que o express usa para montar o sistema de roteamento
- `./src/controllers/index`: É a página que fica localizado os controllers para fazer as requisições no banco de dados.
- `./src/models/index`: É a página que fica localizado os models que foram criados no banco de dados.
- `./src/config/db`: É a configuração de acesso ao banco de dados.

## Como me localizar no projeto?

- O projeto se inicia pelo arquivo `./server.ts`, onde o servidor fica disponivel.
  - Os serviços essenciais como o `app`, `db` e `routes` ficam em `./src/index.ts`
    - Todas as rotas, ficam no arquivo `./src/routes/index.ts`
      - Ao chamar uma rota, a mesma executará um serviço que fica em  `./src/controllers/index.ts`
        - Todos os controllers, utilizam um model que foi criado no banco de dados, os mesmos manipulam os dados no banco de dados, os models ficam em  `./src/models/index.ts`
          - Por fim os models são armazenados no banco de dados, que é configurado em `./src/config/db.ts`

## Scripts Disponíveis
    npm run build: Compila o projeto TypeScript.
    npm start: Inicia o servidor em produção (certifique-se de ter feito o build antes).
    npm run dev: Inicia o servidor em modo de desenvolvimento com suporte a hot-reloading.

## API User Endpoints

    POST /api/users: Cria um novo usuário.
    GET /api/users: Retorna a lista de todos os usuários.
    GET /api/users/:id: Retorna os detalhes de um usuário específico.
    PUT /api/users/:id: Atualiza os dados de um usuário.
    DELETE /api/users/:id: Remove um usuário.

## API Customer Endpoints

    POST /api/customers: Cria um novo customer.
    GET /api/customer: Retorna a lista de todos os customers.
    GET /api/customer/:id: Retorna os detalhes de um customer específico.
    PUT /api/customer/:id: Atualiza os dados de um customer.
    DELETE /api/customer/:id: Remove um customer.

## Contribuição

Sinta-se à vontade para contribuir! Abra uma issue ou envie um pull request.

## Licença

Este projeto é licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.
