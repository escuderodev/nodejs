# === anotações importantes ===

- criar projeto nodejs: npm init -y
- em package.json, definir type: module
- criar servidor na raiz do projeto: server.js
- instalar lib express: npm i express
- instalar lib nodemon: npm i nodemon
- criar pasta src
- em serc, criar arquivo app.js
- em app, instanciar express
- em app, criar a rota padrão
- exportar app
- em server, importar app
- em server, definir porta
- em server, escutar a porta
- testar a api
- por enquanto, em app.js, vamos criar um database em memoria logo abaixo da instancia de express conforme abaixo:
    const app = express();
    const livros = []
- 