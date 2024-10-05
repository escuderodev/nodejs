import express from "express";
import getConnection from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await getConnection();

connection.on("error", (error) => {
    console.error("erro de conexão", error.message);
});

connection.once("open", () => {
    console.log("conexão realizada com sucesso!")
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id)
    if(livros[index]) {
        livros.splice(index, 1)
        res.status(200).send({message: "Livro deletado com sucesso!"});
    } else {
        res.status(200).json({message: "Livro não encontrado!"})
    }
})

export default app;