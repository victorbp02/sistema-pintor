const API_BASE_URL = 'http://localhost:3001/api';

export interface ClienteData {
  nome: string;
  telefone: string;
  email: string;
  endereco: string;
  servico: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Criar novo cliente (formulário de contato)
  async createCliente(clienteData: ClienteData): Promise<ApiResponse> {
    return this.request<ApiResponse>('/clientes/contact', {
      method: 'POST',
      body: JSON.stringify(clienteData),
    });
  }

  // Health check da API
  async healthCheck(): Promise<ApiResponse> {
    return this.request<ApiResponse>('/health');
  }
}

export const apiService = new ApiService();
