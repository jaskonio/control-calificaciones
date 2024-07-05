import { Request, Response } from 'express';
import { BaseServiceImpl } from '../services/base.service.impl';

export class BaseController {
  private service: BaseServiceImpl;

  constructor(service: BaseServiceImpl) {
    this.service = service;
  }

  async createEntity(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.service.create(req.body);
      res.status(201).json(entity);
    }
    catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
  
  async getEntities(req: Request, res: Response): Promise<void> {
    try {
      const entities = await this.service.getAll();
      res.status(200).json(entities);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
  
  async getEntityById(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.service.findById(Number(req.params.id));
      if (entity) {
        res.status(200).json(entity);
      } else {
        res.status(404).json({ error: `Entity not found` });
      }
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
  
  async updateEntity(req: Request, res: Response): Promise<void> {
    try {
        const entity = await this.service.updateById(Number(req.params.id), req.body);
        res.status(200).json(entity);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
  
  async deleteEntity(req: Request, res: Response): Promise<void> {
    try {
      const entity = await this.service.deleteById(Number(req.params.id));
      res.status(500).json({ status: "OK"});

    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  };
}

