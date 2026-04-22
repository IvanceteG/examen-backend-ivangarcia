import express from 'express';
import { getMascotas, getMascotaById, createMascota, updateMascota, deleteMascota } from '../controlador/mascotasController.js';

const router = express.Router();

router.get('/', getMascotas);
router.get('/:id', getMascotaById);
router.post('/', createMascota);
router.put('/:id', updateMascota);
router.delete('/:id', deleteMascota);

export default router;