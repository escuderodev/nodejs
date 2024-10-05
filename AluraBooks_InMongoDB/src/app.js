import express from "express";
import getConnection from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await getConnection();

connection.on("error", (error) => {
    console.error("erro de conexão", error.message);
});

connection.once("open", () => {
    console.log("conexão realizada com sucesso!")
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({message: "Curso de Node.js"});
});

app.get("/livros", async (req, res) => {
    const listaDeLivros = await livro.find({});
    res.status(200).json(listaDeLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id)
    const livro = livros[index]
    if(livro) {
        res.status(200).json(livro);
    } else {
        res.status(200).json({message: "Livro não encontrado!"})
    }
});

app.post("/livros", (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).json({message: "Livro cadastrado com sucesso!"})
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivros(req.params.id)
    if(livros[index]) {
        livros[index].title = req.body.title
        livros[index].author = req.body.author
        livros[index].publisher = req.body.publisher
        res.status(200).json({message: "Livro atualizado com sucesso!"});
    } else {
        res.status(200).json({message: "Livro não encontrado!"})
    }
});

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