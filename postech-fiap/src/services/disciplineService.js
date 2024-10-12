import { discipline } from "../models/Discipline.js";

export class DisciplineService {

    static async disciplinieList(req, res) {
        try {
            return await discipline.find({});
        } catch (error) {
            return {message: `Falha ao listar disciplinas - ${error.message}`};
        }
    };

    static async getDisciplineById(id) {
        try {
            const disciplineSearch = await discipline.findById(id);
            if(disciplineSearch) {
                return disciplineSearch;
            } else {
                return {message: "Disciplina não encontrada!"};
            }
        } catch (error) {
            return {message: `Falha ao buscar disciplina por id - ${error.message}`};
        }
    };

    static async disciplineCreate(req, res) {
        try {
            const newDiscipline = await discipline.create(req.body);
            return {
                message: "Disciplina cadastrada com sucesso!",
                disciplina: newDiscipline
            };
        } catch (error) {
            return {message: `Falha ao cadastrar disciplina!`};
        }
    };

    static async disciplineUpdate(req, res) {
        try {
            const id = req.params.id;
            const disciplineSearch = await discipline.findById(id);
            
            const disciplineUpdated = {
                title: disciplineSearch.title,
                createdAt: disciplineSearch.createdAt,
                updatedAt: Date.now()
            }
            
            if(disciplineSearch) {
                await discipline.findByIdAndUpdate(id, disciplineUpdated);
                return {message: "Disciplina atualizada com sucesso!"};
            } else {
                return {message: "Disciplina não encontrada!"};
            }
        } catch (error) {
            return {message: `Falha ao atualizar disciplina - ${error.message}`};
        }
    };

    static async disciplineDelete(req, res) {
        try {
            const id = req.params.id;
            const disciplineSearch = await discipline.findById(id);
            if(disciplineSearch) {
                await discipline.findByIdAndDelete(id);
                return {message: "Disciplina excluída com sucesso!"};
            } else {
                return {message: "Disciplina não encontrada!"};
            }
        } catch (error) {
            return {message: `Falha ao excluir disciplina - ${error.message}`};
        }
    };
};