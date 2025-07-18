import { Request, Response, NextFunction } from 'express';
import { body, param, validationResult } from 'express-validator';
import { createError } from './errorHandler';

export const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(err => err.msg);
    return next(createError(errorMessages.join(', '), 400));
  }
  next();
};

// Validações para Cliente
export const validateCreateCliente = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('telefone').notEmpty().withMessage('Telefone é obrigatório'),
  body('email').isEmail().withMessage('Email deve ser válido'),
  body('endereco').notEmpty().withMessage('Endereço é obrigatório'),
  handleValidationErrors,
];

export const validateUpdateCliente = [
  body('nome').optional().notEmpty().withMessage('Nome não pode ser vazio'),
  body('telefone').optional().notEmpty().withMessage('Telefone não pode ser vazio'),
  body('email').optional().isEmail().withMessage('Email deve ser válido'),
  body('endereco').optional().notEmpty().withMessage('Endereço não pode ser vazio'),
  handleValidationErrors,
];

export const validateClienteId = [
  param('id').notEmpty().withMessage('ID do cliente é obrigatório'),
  handleValidationErrors,
];

// Validações para Serviço
export const validateCreateServico = [
  body('titulo').notEmpty().withMessage('Título é obrigatório'),
  body('descricao').notEmpty().withMessage('Descrição é obrigatória'),
  body('valor').isFloat({ min: 0 }).withMessage('Valor deve ser um número positivo'),
  body('clienteId').notEmpty().withMessage('ID do cliente é obrigatório'),
  body('status').optional().isIn(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO']).withMessage('Status inválido'),
  handleValidationErrors,
];

export const validateUpdateServico = [
  body('titulo').optional().notEmpty().withMessage('Título não pode ser vazio'),
  body('descricao').optional().notEmpty().withMessage('Descrição não pode ser vazia'),
  body('valor').optional().isFloat({ min: 0 }).withMessage('Valor deve ser um número positivo'),
  body('status').optional().isIn(['PENDENTE', 'EM_ANDAMENTO', 'CONCLUIDO', 'CANCELADO']).withMessage('Status inválido'),
  handleValidationErrors,
];

export const validateServicoId = [
  param('id').notEmpty().withMessage('ID do serviço é obrigatório'),
  handleValidationErrors,
];

// Validações para Autenticação
export const validateLogin = [
  body('email').isEmail().withMessage('Email deve ser válido'),
  body('senha').notEmpty().withMessage('Senha é obrigatória'),
  handleValidationErrors,
];

export const validateRegister = [
  body('nome').notEmpty().withMessage('Nome é obrigatório'),
  body('email').isEmail().withMessage('Email deve ser válido'),
  body('senha').isLength({ min: 6 }).withMessage('Senha deve ter pelo menos 6 caracteres'),
  handleValidationErrors,
]; 