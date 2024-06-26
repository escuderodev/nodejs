import express from 'express';
import routers from "../src/routes/routes.js";
import cors from 'cors';

console.log('Server is running on http://localhost:8800');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/usuarios", routers)

app.listen(8800);