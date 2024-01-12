import express, { json } from "express";
import db from "./config/db";
import userRoutes from "./routes/index";

const app = express();
app.use(json());

// Conectar ao MongoDB
db();

// Usar as rotas do usuário
app.use("/api", userRoutes);

export default app;