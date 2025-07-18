import { Router } from 'express';
import { ServicoController } from '../controllers/servicoController';
import {
  validateCreateServico,
  validateUpdateServico,
  validateServicoId,
} from '../middlewares/validation';
import { authenticateToken, requireUser } from '../middlewares/auth';

const router = Router();
const servicoController = new ServicoController();

// Todas as rotas de serviços requerem autenticação
router.use(authenticateToken);
router.use(requireUser);

// Rotas CRUD
router.get('/', servicoController.getAll);
router.get('/:id', validateServicoId, servicoController.getById);
router.post('/', validateCreateServico, servicoController.create);
router.put('/:id', validateServicoId, validateUpdateServico, servicoController.update);
router.delete('/:id', validateServicoId, servicoController.delete);

// Rotas adicionais
router.get('/cliente/:clienteId', servicoController.getByClienteId);
router.get('/status/:status', servicoController.getByStatus);

export default router; 