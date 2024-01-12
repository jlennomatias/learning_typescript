import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserId, updateUser } from "../controllers";

const router = Router();

// Rota para obter todos os dados
router.get("/users", getAllUsers);

// Rota para obter um dado por ID
router.get("/users/:id", getUserId);

// Rota para criar um novo dado
router.post("/users", createUser);

// Rota para atualizar um dado por ID
router.put("/users/:id", updateUser);

// Rota para remover um dado por ID
router.delete("/users/:id", deleteUser);

export default router;
