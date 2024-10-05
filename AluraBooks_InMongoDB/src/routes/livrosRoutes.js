import express from "express";
import { LivroController } from "../controllers/livroController.js";

const livroRoutes = express.Router();

livroRoutes.post("/livros", LivroController.cadastrarLivro);
livroRoutes.get("/livros", LivroController.listarLivros);
livroRoutes.get("/livros/search", LivroController.buscarLivrosPorEditora);
livroRoutes.get("/livros/:id", LivroController.buscarLivroPorId);
livroRoutes.put("/livros/:id", LivroController.atualizarLivro);
livroRoutes.delete("/livros/:id", LivroController.excluirLivro);

export default livroRoutes;