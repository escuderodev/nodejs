import mongoose from "mongoose";

// definição de Schema
const livroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publisher: {type: String, required: true},
    price: {type: Number, required: true},
    pages: {type: Number, required: true}
}, {versionKey: false});

// definição de modelo
const livro = mongoose.model("livros", livroSchema);

export default livro;