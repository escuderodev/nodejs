import express from "express";
import { AutorController } from "../controllers/autorController.js";

const autorRoutes = express.Router();

autorRoutes.post("/autores", AutorController.cadastrarAutor);
autorRoutes.get("/autores", AutorController.listarAutores);
autorRoutes.get("/autores/:id", AutorController.buscarAutorPorId);
autorRoutes.put("/autores/:id", AutorController.atualizarAutor);
autorRoutes.delete("/autores/:id", AutorController.excluirAutor);

export default autorRoutes;