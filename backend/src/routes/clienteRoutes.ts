import { Router } from 'express';
import { ClienteController } from '../controllers/clienteController';
import {
  validateCreateCliente,
  validateUpdateCliente,
  validateClienteId,
} from '../middlewares/validation';
import { authenticateToken, requireUser } from '../middlewares/auth';

const router = Router();
const clienteController = new ClienteController();

// Todas as rotas de clientes requerem autenticação
router.use(authenticateToken);
router.use(requireUser);

// Rotas CRUD
router.get('/', clienteController.getAll);
router.get('/:id', validateClienteId, clienteController.getById);
router.post('/', validateCreateCliente, clienteController.create);
router.put('/:id', validateClienteId, validateUpdateCliente, clienteController.update);
router.delete('/:id', validateClienteId, clienteController.delete);

export default router; 