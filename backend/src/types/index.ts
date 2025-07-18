export interface Usuario {
  id: string;
  nome: string;
  email: string;
  role: 'ADMIN' | 'USER';
  createdAt: Date;
  updatedAt: Date;
}

export interface Cliente {
  id: string;
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Servico {
  id: string;
  titulo: string;
  descricao: string;
  status: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO';
  valor: number;
  clienteId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateClienteData {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
}

export interface UpdateClienteData {
  nome?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
}

export interface CreateServicoData {
  titulo: string;
  descricao: string;
  valor: number;
  clienteId: string;
  status?: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO';
}

export interface UpdateServicoData {
  titulo?: string;
  descricao?: string;
  valor?: number;
  status?: 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDO' | 'CANCELADO';
}

export interface LoginData {
  email: string;
  senha: string;
}

export interface RegisterData {
  nome: string;
  email: string;
  senha: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
} 