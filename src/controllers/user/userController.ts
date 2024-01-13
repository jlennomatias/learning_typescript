import User from "../../models";
import { Request, Response } from "express";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro na função getAllUsers:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const getUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuario);
  } catch (error) {
    console.error("Erro ao listar usuário por ID:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Erro na função createUser:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const dadosAtualizados = req.body;

    const usuarioAtualizado = await User.findByIdAndUpdate(userId, dadosAtualizados, {
      new: true, // Retorna o documento atualizado
      runValidators: true // Executa validações definidas no modelo
    });

    if (!usuarioAtualizado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;

    const usuarioDeletado = await User.findByIdAndDelete(userId);

    if (!usuarioDeletado) {
      return res.status(404).json({ mensagem: "Usuário não encontrado" });
    }

    res.status(200).json(usuarioDeletado);
  } catch (error) {
    console.error("Erro ao deletar usuário:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

export { getAllUsers, getUserId, createUser, updateUser, deleteUser };
