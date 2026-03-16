import express from 'express';
import * as controller from '../controllers/alunoController.js';

const router = express.Router();

router.post('/auno', controller.criar);
router.get('/auno', controller.buscarTodos);
router.get('/auno/:id', controller.buscarPorId);
router.put('/auno/:id', controller.atualizar);
router.delete('/auno/:id', controller.deletar);

export default router;
