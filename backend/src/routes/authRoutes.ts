import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { validateLogin, validateRegister } from '../middlewares/validation';
import { authenticateToken } from '../middlewares/auth';

const router = Router();
const authController = new AuthController();

// Rotas públicas
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);

// Rotas protegidas
router.get('/profile', authenticateToken, authController.getProfile);

export default router; 