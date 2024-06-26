# === ANOTAÇÕES IMPORTANTES ===

## backend

- criar pasta api para backend
- criar pasta frontend 
- em api, criar projeto nodejs => npm init -y
- instalar libs necessárias => npm install express nodemon mysql cors dotenv
- criar arquivo .gitignore
- criar arquivo .env
- criar pasta src
- em src, criar arquivo server.js
- inserir no package.json "type": "module",
- em src, criar pasta infra
- em infra, criar arquivo db.js
- em db.js, importar mysql
- criar tabelas no banco de dados
- no banco de dados, liberar acesso ao host => alter user 'root'@'localhost' identified with mysql_native_password by '1403';
- em src, criar pasta routes
- em routes, criar arquivo routes.js
- em src, criar pasta controllers
- em controllers, criar arquivo user-controller.js
- em routes, criar rotas atreladas com as funções do controller
- em user-controller.js, importar o db
- em user-controller.js, criar método getUsers
- em routes.js, importar express e getUsers
- em routes.js, criar endpoints e exportá-los
- em server.js, importar routes
- em server.js, habilitar cors e routes conforme abaixo:
    - app.use(cors());
    - app.use("/usuarios", routers)
- testar api

## frontend

- mover para a pasta frontend
- criar um project react => npx create-react-app ./
- instalar libs necessárias => npm install styled-components axios react-icons react-toastify 
    - styled-components => criar componentes de estilização
    - axios => consumir api backend
    - react-icons => biblioteca de icones 
    - react-toastify => feedback de ações
- remover arquivos desnecessários mantendo em src apenas o App.js e o index.js
- em App.js, remover o header padrão deixando apenas a div
- em public, deixar apenas o index.html
- importar no index.html  a fonte poppins 400 500 e 600 do google fonts 
- em src, criar pasta styles para  montar estilização global
- em styles, criar o arquivo global.js
- em App.js, importar GlobalStyle
- em src, criar a pasta components
- em components, criar o arquivo Form.js
- em components, criar o arquivo Grid.js