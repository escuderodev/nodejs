import mongoose from "mongoose";

const disciplineSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    title: {type: String, required: true}
}, {versionKey: false});

const discipline = mongoose.model("disciplinies", disciplineSchema);

export { discipline, disciplineSchema };