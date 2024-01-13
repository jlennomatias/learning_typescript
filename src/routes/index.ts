import { Router } from "express";
import { UserController } from "../controllers";

const router = Router();

// Rota para obter todos os dados
router.get("/users", UserController.getAllUsers);

// Rota para obter um dado por ID
router.get("/users/:id", UserController.getUserId);

// Rota para criar um novo dado
router.post("/users", UserController.createUser);

// Rota para atualizar um dado por ID
router.put("/users/:id", UserController.updateUser);

// Rota para remover um dado por ID
router.delete("/users/:id", UserController.deleteUser);

export default router;
