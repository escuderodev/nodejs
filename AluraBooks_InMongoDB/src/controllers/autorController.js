import { autor } from "../models/Autor.js";

export class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaDeAutores = await autor.find({});
            res.status(200).json(listaDeAutores);
        } catch (error) {
            res.status(500).json({message: `Falha ao listar autores - ${error.message}`})
        }
    };

    static async buscarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if(autorEncontrado) {
                res.status(200).json(autorEncontrado);
            } else {
                res.status(200).json({message: "Autor não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao buscar autor por id - ${error.message}`})
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor cadastrado com sucesso!",
                autor: novoAutor
            });
        } catch (error) {
            res.status(500).json({
                message: `Falha ao cadastrar autor - ${error.message}`
            });
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if(autorEncontrado) {
                await autor.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Autor atualizado com sucesso!"});
            } else {
                res.status(200).json({message: "Autor não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao atualizar autor - ${error.message}`})
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if(autorEncontrado) {
                await autor.findByIdAndDelete(id);
                res.status(200).json({message: "Autor excluído com sucesso!"});
            } else {
                res.status(200).json({message: "Autor não encontrado!"});
            }
        } catch (error) {
            res.status(500).json({message: `Falha ao excluir autor - ${error.message}`})
        }
    };
};