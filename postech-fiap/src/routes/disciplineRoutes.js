import express from 'express';
import { DisciplineController } from '../controllers/disciplineController';

const disciplineRoutes = express.Router();

disciplineRoutes.post("/disciplinies", DisciplineController.disciplineCreate);
disciplineRoutes.get("/disciplinies", DisciplineController.disciplinieList);
disciplineRoutes.get("/disciplinies/:id", DisciplineController.getDisciplineById);
disciplineRoutes.put("/disciplinies/:id", DisciplineController.disciplineUpdate);
disciplineRoutes.delete("/disciplinies/:id", DisciplineController.disciplineDelete);

export default disciplineRoutes;