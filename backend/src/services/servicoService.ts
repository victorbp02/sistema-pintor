import { prisma } from '../config/database';
import { Servico, CreateServicoData, UpdateServicoData } from '../types';
import { createError } from '../middlewares/errorHandler';

export class ServicoService {
  async findAll(): Promise<Servico[]> {
    return await prisma.servico.findMany({
      include: {
        cliente: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string): Promise<Servico> {
    const servico = await prisma.servico.findUnique({
      where: { id },
      include: {
        cliente: true,
      },
    });

    if (!servico) {
      throw createError('Serviço não encontrado', 404);
    }

    return servico;
  }

  async create(data: CreateServicoData): Promise<Servico> {
    // Verificar se o cliente existe
    const cliente = await prisma.cliente.findUnique({
      where: { id: data.clienteId },
    });

    if (!cliente) {
      throw createError('Cliente não encontrado', 404);
    }

    return await prisma.servico.create({
      data: {
        ...data,
        status: data.status || 'PENDENTE',
      },
      include: {
        cliente: true,
      },
    });
  }

  async update(id: string, data: UpdateServicoData): Promise<Servico> {
    const servico = await prisma.servico.findUnique({
      where: { id },
    });

    if (!servico) {
      throw createError('Serviço não encontrado', 404);
    }

    return await prisma.servico.update({
      where: { id },
      data,
      include: {
        cliente: true,
      },
    });
  }

  async delete(id: string): Promise<void> {
    const servico = await prisma.servico.findUnique({
      where: { id },
    });

    if (!servico) {
      throw createError('Serviço não encontrado', 404);
    }

    await prisma.servico.delete({
      where: { id },
    });
  }

  async findByClienteId(clienteId: string): Promise<Servico[]> {
    return await prisma.servico.findMany({
      where: { clienteId },
      include: {
        cliente: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findByStatus(status: string): Promise<Servico[]> {
    return await prisma.servico.findMany({
      where: { status: status as any },
      include: {
        cliente: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }
} 