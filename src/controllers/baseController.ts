import { Request, Response } from 'express';
import { Model, ModelStatic } from 'sequelize';


export const createEntity = async <T extends Model>(model: ModelStatic<T>, req: Request, res: Response): Promise<void> => {
  try {
    const entity = await model.create(req.body);
    res.status(201).json(entity);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getEntities = async <T extends Model>(model: ModelStatic<T>, req: Request, res: Response): Promise<void> => {
  try {
    const entities = await model.findAll();
    res.status(200).json(entities);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getEntityById = async <T extends Model>(model: ModelStatic<T>, req: Request, res: Response): Promise<void> => {
  try {
    const entity = await model.findByPk(req.params.id);
    if (entity) {
      res.status(200).json(entity);
    } else {
      res.status(404).json({ error: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateEntity = async <T extends Model>(model: ModelStatic<T>, req: Request, res: Response): Promise<void> => {
  try {
    const entity = await model.findByPk(req.params.id);
    if (entity) {
      await entity.update(req.body);
      res.status(200).json(entity);
    } else {
      res.status(404).json({ error: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteEntity = async <T extends Model>(model: ModelStatic<T>, req: Request, res: Response): Promise<void> => {
  try {
    const entity = await model.findByPk(req.params.id);
    if (entity) {
      await entity.destroy();
      res.status(204).json();
    } else {
      res.status(404).json({ error: `${model.name} not found` });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
