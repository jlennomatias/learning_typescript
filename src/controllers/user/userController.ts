import { Request, Response } from "express";
import { prismaClient1 } from "../../prisma";
import { Prisma } from "@prisma/client";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prismaClient1.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro na função getAllUsers:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const getUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const usuario = await prismaClient1.user.findUnique({
      where: { id: userId },
    });

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
    const { name, email, password } = req.body;
    const userData: Prisma.UserCreateInput = {
      name: name,
      email: email,
      password: password,
    };

    // Cria um novo usuário utilizando o Prisma
    const user = await prismaClient1.user.create({
      data: userData,
    });

    res.status(201).json(user);
  } catch (error) {
    console.error("Erro na função createUser:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const dadosAtualizados = req.body;

    const usuarioAtualizado = await prismaClient1.user.update({
      where: { id: userId },
      data: dadosAtualizados,
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

    const usuarioDeletado = await prismaClient1.user.delete({
      where: { id: userId },
    });

    // Deletar muitos
    // const deletedUsers = await prisma.user.deleteMany({
    //   where: { id: { in: [userId1, userId2, userId3] } },
    // });

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
