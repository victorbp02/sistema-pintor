import bcrypt from 'bcryptjs';
import { prisma } from '../config/database';
import { generateToken } from '../config/jwt';
import { LoginData, RegisterData, Usuario } from '../types';
import { createError } from '../middlewares/errorHandler';

export class AuthService {
  async register(data: RegisterData): Promise<{ user: Omit<Usuario, 'senha'>; token: string }> {
    const { nome, email, senha } = data;

    // Verificar se o usuário já existe
    const existingUser = await prisma.usuario.findUnique({
      where: { email },
    });

    if (existingUser) {
      throw createError('Usuário já existe com este email', 400);
    }

    // Criptografar senha
    const hashedPassword = await bcrypt.hash(senha, 12);

    // Criar usuário
    const user = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
        role: 'USER',
      },
    });

    // Gerar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const { senha: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }

  async login(data: LoginData): Promise<{ user: Omit<Usuario, 'senha'>; token: string }> {
    const { email, senha } = data;

    // Buscar usuário
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      throw createError('Credenciais inválidas', 401);
    }

    // Verificar senha
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw createError('Credenciais inválidas', 401);
    }

    // Gerar token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const { senha: _, ...userWithoutPassword } = user;
    return { user: userWithoutPassword, token };
  }

  async getProfile(userId: string): Promise<Omit<Usuario, 'senha'>> {
    const user = await prisma.usuario.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw createError('Usuário não encontrado', 404);
    }

    const { senha, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }
} 