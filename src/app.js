import express from "express";

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        title: "Casamento Blindado",
        author: "Renato Cardoso",
        publisher: "UniPro"
    },
    {
        id: 2,
        title: "Casamento Blindado 2.0",
        author: "Renato Cardoso",
        publisher: "UniPro"
    }
]

function buscaLivros(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).json({message: "Curso de Node.js"});
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
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