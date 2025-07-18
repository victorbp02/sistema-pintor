import { prisma } from '../config/database';
import { Cliente, CreateClienteData, UpdateClienteData } from '../types';
import { createError } from '../middlewares/errorHandler';

export class ClienteService {
  async findAll(): Promise<Cliente[]> {
    return await prisma.cliente.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string): Promise<Cliente> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
      include: {
        servicos: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!cliente) {
      throw createError('Cliente não encontrado', 404);
    }

    return cliente;
  }

  async create(data: CreateClienteData): Promise<Cliente> {
    return await prisma.cliente.create({
      data,
    });
  }

  async update(id: string, data: UpdateClienteData): Promise<Cliente> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw createError('Cliente não encontrado', 404);
    }

    return await prisma.cliente.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw createError('Cliente não encontrado', 404);
    }

    await prisma.cliente.delete({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<Cliente | null> {
    return await prisma.cliente.findFirst({
      where: { email },
    });
  }
} 