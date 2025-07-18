import { Request, Response, NextFunction } from 'express';
import { ServicoService } from '../services/servicoService';
import { ApiResponse } from '../types';

export class ServicoController {
  private servicoService: ServicoService;

  constructor() {
    this.servicoService = new ServicoService();
  }

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const servicos = await this.servicoService.findAll();
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviços listados com sucesso',
        data: servicos,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const servico = await this.servicoService.findById(id);
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviço encontrado com sucesso',
        data: servico,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const servico = await this.servicoService.create(req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviço criado com sucesso',
        data: servico,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const servico = await this.servicoService.update(id, req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviço atualizado com sucesso',
        data: servico,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.servicoService.delete(id);
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviço deletado com sucesso',
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getByClienteId = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { clienteId } = req.params;
      const servicos = await this.servicoService.findByClienteId(clienteId);
      
      const response: ApiResponse = {
        success: true,
        message: 'Serviços do cliente listados com sucesso',
        data: servicos,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getByStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { status } = req.params;
      const servicos = await this.servicoService.findByStatus(status);
      
      const response: ApiResponse = {
        success: true,
        message: `Serviços com status ${status} listados com sucesso`,
        data: servicos,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
} 