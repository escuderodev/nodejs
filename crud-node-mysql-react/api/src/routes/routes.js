import express from "express";
import { getUsers } from "../controllers/user-controller.js"

const router = express.Router();

router.get("/usuarios", getUsers);

export default router;