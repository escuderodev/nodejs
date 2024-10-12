import mongoose from "mongoose";

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DATABASE;

async function getConnection() {
    // mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@alurabooks.rlqdz.mongodb.net/${DATABASE}?retryWrites=true&w=majority&appName=alurabooks`)
    return mongoose.connection;
};

export default getConnection;