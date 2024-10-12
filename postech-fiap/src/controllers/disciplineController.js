import { DisciplineService } from "../services/disciplineService.js";

export class DisciplineController {

    static async disciplinieList(req, res) {
        const result = await DisciplineService.disciplinieList(req);

        if (Array.isArray(result)) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ message: result })
        }
    };

    static async getDisciplineById(req, res) {
        try {
            const id = req.params.id;
            const disciplineSearch = await DisciplineService.getDisciplineById(id);

            if (disciplineSearch) {
                // Encontrou a disciplina - Sucesso (200)
                res.status(200).json(disciplineSearch);
            } else {
                // Disciplina não encontrada - Não Autorizado (404)
                res.status(404).json({ message: "Disciplina não encontrada!" });
            }
        } catch (error) {
            // Erro ao buscar disciplina - Erro Interno do Servidor (500)
            res.status(500).json({ message: `Falha ao buscar disciplina por id - ${error.message}` });
        }
    };

    static async disciplineCreate(req, res) {
        try {
            const newDiscipline = await discipline.create(req.body);
            res.status(201).json({
                message: "Disciplina cadastrada com sucesso!",
                disciplina: newDiscipline
            });
        } catch (error) {
            res.status(500).json({
                message: `Falha ao cadastrar disciplina!`
            });
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

            if (disciplineSearch) {
                await discipline.findByIdAndUpdate(id, disciplineUpdated);
                res.status(200).json({
                    message: "Disciplina atualizada com sucesso!"
                });
            } else {
                res.status(200).json({
                    message: "Disciplina não encontrada!"
                })
            }
        } catch (error) {
            res.status(500).json({
                message: `Falha ao atualizar disciplina - ${error.message}`
            });
        }
    };

    static async disciplineDelete(req, res) {
        try {
            const id = req.params.id;
            const disciplineSearch = await discipline.findById(id);
            if (disciplineSearch) {
                await discipline.findByIdAndDelete(id);
                res.status(200).json({
                    message: "Disciplina excluída com sucesso!"
                });
            } else {
                res.status(200).json({
                    message: "Disciplina não encontrada!"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: `Falha ao excluir disciplina - ${error.message}`
            });
        }
    };
};