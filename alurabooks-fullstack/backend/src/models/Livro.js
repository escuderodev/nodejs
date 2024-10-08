import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

// definição de Schema
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    publisher: {type: String, required: true},
    price: {type: Number, required: true},
    pages: {type: Number, required: true},
    author: autorSchema
}, {versionKey: false});

// definição de modelo
const livro = mongoose.model("livros", livroSchema);

export default livro;

// https://cursos.alura.com.br/course/node-js-api-rest-express-mongodb/task/136736