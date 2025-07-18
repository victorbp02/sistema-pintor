import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar usuário admin
  const hashedPassword = await bcrypt.hash('admin123', 12);
  
  const adminUser = await prisma.usuario.upsert({
    where: { email: 'admin@sistema.com' },
    update: {},
    create: {
      nome: 'Administrador',
      email: 'admin@sistema.com',
      senha: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('✅ Usuário admin criado:', adminUser.email);

  // Criar alguns clientes de exemplo
  const clientes = await Promise.all([
    prisma.cliente.upsert({
      where: { email: 'joao@email.com' },
      update: {},
      create: {
        nome: 'João Silva',
        telefone: '(11) 99999-9999',
        email: 'joao@email.com',
        endereco: 'Rua das Flores, 123 - São Paulo, SP',
      },
    }),
    prisma.cliente.upsert({
      where: { email: 'maria@email.com' },
      update: {},
      create: {
        nome: 'Maria Santos',
        telefone: '(11) 88888-8888',
        email: 'maria@email.com',
        endereco: 'Av. Paulista, 456 - São Paulo, SP',
      },
    }),
    prisma.cliente.upsert({
      where: { email: 'pedro@email.com' },
      update: {},
      create: {
        nome: 'Pedro Oliveira',
        telefone: '(11) 77777-7777',
        email: 'pedro@email.com',
        endereco: 'Rua Augusta, 789 - São Paulo, SP',
      },
    }),
  ]);

  console.log('✅ Clientes criados:', clientes.length);

  // Criar alguns serviços de exemplo
  const servicos = await Promise.all([
    prisma.servico.create({
      data: {
        titulo: 'Pintura Residencial',
        descricao: 'Pintura completa da casa, incluindo salas, quartos e banheiros',
        valor: 2500.00,
        status: 'PENDENTE',
        clienteId: clientes[0].id,
      },
    }),
    prisma.servico.create({
      data: {
        titulo: 'Pintura Comercial',
        descricao: 'Pintura do escritório comercial com cores corporativas',
        valor: 3500.00,
        status: 'EM_ANDAMENTO',
        clienteId: clientes[1].id,
      },
    }),
    prisma.servico.create({
      data: {
        titulo: 'Pintura de Fachada',
        descricao: 'Pintura da fachada do prédio residencial',
        valor: 1800.00,
        status: 'CONCLUIDO',
        clienteId: clientes[2].id,
      },
    }),
  ]);

  console.log('✅ Serviços criados:', servicos.length);

  console.log('🎉 Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 