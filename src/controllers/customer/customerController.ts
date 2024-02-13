import { Request, Response } from "express";
import { prismaClient2 } from "../../prisma";
import { Prisma } from "../../../prisma/generated/client2";

const getAllCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await prismaClient2.clientes.findMany();
    res.status(200).json(customers);
  } catch (error) {
    console.error("Erro na função getAllCustomers:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const getCustomerId = async (req: Request, res: Response) => {
  try {
    const customerId = Number(req.params.id);
    const usuario = await prismaClient2.clientes.findUnique({
      where: { id: customerId },
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


const createCustomer = async (req: Request, res: Response) => {
  try {
    const { name, email, cpf, cnpj, ispb, issuer, number, accounttype, pix } = req.body;
    const customerData: Prisma.ClientesCreateInput = {
      name: name,
      email: email,
      cpf: cpf,
      ...(cnpj && { cnpj: cnpj }), // Torna o cnpj opcional
      ispb: ispb,
      issuer: issuer,
      number: number,
      accounttype: accounttype,
      pix: pix
    };

    // Cria um novo usuário utilizando o Prisma
    const customer = await prismaClient2.clientes.create({
      data: customerData,
    });

    res.status(201).json(customer);
  } catch (error) {
    console.error("Erro na função createCustomer:", error);
    res.status(500).json({ mensagem: "Erro interno do servidor" });
  }
};

const updateCustomer = async (req: Request, res: Response) => {
  try {
    const customerId = Number(req.params.id);
    const dadosAtualizados = req.body;

    const usuarioAtualizado = await prismaClient2.clientes.update({
      where: { id: customerId },
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

const deleteCustomer = async (req: Request, res: Response) => {
  try {
    const customerId = Number(req.params.id);

    const usuarioDeletado = await prismaClient2.clientes.delete({
      where: { id: customerId },
    });

    // Deletar muitos
    // const deletedCustomers = await prisma.customer.deleteMany({
    //   where: { id: { in: [customerId1, customerId2, customerId3] } },
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

export { getAllCustomers, getCustomerId, createCustomer, updateCustomer, deleteCustomer };
