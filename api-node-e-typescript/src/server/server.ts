import 'dotenv'
import express from "express";

const server = express();

server.get('/', (req, res) => {
    return res.status(200).send('Seja bem vindo a nossa API...');
});

export { server };