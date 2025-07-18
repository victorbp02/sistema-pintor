import { Request, Response, NextFunction } from 'express';
import { ClienteService } from '../services/clienteService';
import { ApiResponse } from '../types';

export class ClienteController {
  private clienteService: ClienteService;

  constructor() {
    this.clienteService = new ClienteService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clientes = await this.clienteService.findAll();
      
      const response: ApiResponse = {
        success: true,
        message: 'Clientes listados com sucesso',
        data: clientes,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const cliente = await this.clienteService.findById(id);
      
      const response: ApiResponse = {
        success: true,
        message: 'Cliente encontrado com sucesso',
        data: cliente,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cliente = await this.clienteService.create(req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Cliente criado com sucesso',
        data: cliente,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const cliente = await this.clienteService.update(id, req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Cliente atualizado com sucesso',
        data: cliente,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.clienteService.delete(id);
      
      const response: ApiResponse = {
        success: true,
        message: 'Cliente deletado com sucesso',
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
} 