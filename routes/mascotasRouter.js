import express from 'express';
import { getMascotas, getMascotaById } from '../controlador/mascotasController.js';

const router = express.Router();

router.get('/', getMascotas);
router.get('/:id', getMascotaById);

export default router;