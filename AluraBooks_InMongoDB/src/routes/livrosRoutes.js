import express from "express";
import { LivroController } from "../controllers/livroController.js";

const routes = express.Router();

routes.post("/livros", LivroController.cadastrarLivro);
routes.get("/livros", LivroController.listarLivros);
routes.get("/livros/:id", LivroController.buscarLivroPorId);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.excluirLivro);

export default routes;