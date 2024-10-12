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
- implementar endpoints
- instalar mongodb: npm i mongodb
- instalar mongoose: npm i mongoose
- criar pasta config
- em config, criar arquivo dbConnect.js
- em dbConnect.js, criar função getConnection
- em app.js, importar getConnection
- em app.js, instanciar getConnection conforme abaixo:
    const connection = await getConnection();

    connection.on("error", (error) => {
        console.error("erro de conexão", error.message);
    });

    connection.once("open", () => {
        console.log("conexão realizada com sucesso!")
    })
- criar models e schemas do mongoose
- em src, criar pasta models
- em models, criar Livro.js
- em Livro.js, importar mongoose e criar Schema
- definir variáveis de ambiente com dotenv
- importar dotenv como a primeira importação no arquivos server.js
- em src, criar pasta controllers
- em controllers, criar os controllers e migrar o código que está em app.js
- em src, criar pasta routes
- em routes, criar arquivo routes.js e migrar o código que está em app.js
- como podemos ter vários arquivos de rotas, vamos criar na pasta routes o arquivo index.js que será o arquivo de entrada das rotas para a aplicação
- ao criar uma nova rota, sempre lembrar de atualizar o livroRoutes
- criar model e Schema para Autor e exportar tanto o model quando o schema