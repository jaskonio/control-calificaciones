// src/routes/userRoutes.ts

import express, { Router, Request, Response } from 'express';
import { User } from '../models/User';

const router: Router = express.Router();

// Obtener todos los usuarios
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Crear un nuevo usuario
router.post('/', async (req: Request, res: Response) => {
  let { username, password, role } = req.body;

  try {
    const newUser = await User.create( { username, password, role });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Actualizar un usuario existente
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password, role } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await user.update({ username, password, role });
    res.json(user);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    await user.destroy();
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});

export default router;
