import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';
import { ApiResponse } from '../types';
import { AuthenticatedRequest } from '../middlewares/auth';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.register(req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Usuário registrado com sucesso',
        data: result,
      };

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.authService.login(req.body);
      
      const response: ApiResponse = {
        success: true,
        message: 'Login realizado com sucesso',
        data: result,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };

  getProfile = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
      const user = await this.authService.getProfile(req.user!.userId);
      
      const response: ApiResponse = {
        success: true,
        message: 'Perfil obtido com sucesso',
        data: user,
      };

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  };
} 