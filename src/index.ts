import express, { json } from "express";
import userRoutes from "./routes/index";

const app = express();
app.use(json());

// Usar as rotas do usuário
app.use("/api", userRoutes);

export default app;