import express from "express";
import disciplineRoutes from "./disciplineRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).json({message: "Bem vindo ao nosso Projeto da Postech Dev FullStack!"}));

    app.use(express.json(), disciplineRoutes);
};

export default routes;