import { Router } from 'express';
import authRoutes from './authRoutes';
import clienteRoutes from './clienteRoutes';
import servicoRoutes from './servicoRoutes';

const router = Router();

// Rotas da API
router.use('/auth', authRoutes);
router.use('/clientes', clienteRoutes);
router.use('/servicos', servicoRoutes);

// Rota de health check
router.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'API funcionando corretamente',
    timestamp: new Date().toISOString(),
  });
});

export default router; 