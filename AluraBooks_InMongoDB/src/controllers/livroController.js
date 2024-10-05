import livro from "../models/Livro.js";

export class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaDeLivros = await livro.find({});
            res.status(200).json(listaDeLivros);
        } catch (error) {
            res.status(500).json({message: `Falha ao listar livros - ${error.message}`})
        }
    };

    static async buscarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if(livroEncontrado) {
                res.status(200).json(livroEncontrado);
            } else {
                res.status(200).json({message: "Livro não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao buscar livro por id - ${error.message}`})
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({
                message: "Livro cadastrado com sucesso!",
                livro: novoLivro
            });
        } catch (error) {
            res.status(500).json({
                message: `Falha ao cadastrar livro - ${error.message}`
            });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if(livroEncontrado) {
                await livro.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Livro atualizado com sucesso!"});
            } else {
                res.status(200).json({message: "Livro não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao atualizar livro - ${error.message}`})
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if(livroEncontrado) {
                await livro.findByIdAndDelete(id);
                res.status(200).json({message: "Livro excluído com sucesso!"});
            } else {
                res.status(200).json({message: "Livro não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao excluir livro - ${error.message}`})
        }
    };
};

