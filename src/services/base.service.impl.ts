import { BaseService } from "./base.service";
import BaseRepositoryImpl from "../repositories/base.repository.impl";
import { BaseModel } from "../models/base.model";


export class BaseServiceImpl implements BaseService<BaseModel>{
  private repository: BaseRepositoryImpl;

  constructor(repository: BaseRepositoryImpl) {
    this.repository = repository;
  }

  getAll(): Promise<BaseModel[]> {
    return this.repository.getAll()
  }

  async create(data: any): Promise<BaseModel> {
    return this.repository.save(data)
  }

  findById(id: number): Promise<BaseModel | null> {
    return this.repository.findById(id)
  }

  updateById(id: number, data: any): Promise<void | [number, BaseModel]> {
    return this.repository.updateById(id, data)
  }

  deleteById(id: number): Promise<number> {
    return this.repository.deleteById(id);
  }
}
