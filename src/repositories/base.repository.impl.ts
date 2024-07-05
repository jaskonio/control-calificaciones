import { Model, ModelStatic } from 'sequelize';
import { BaseRepository } from './base.repository';
import { BaseModel } from '../models/base.model';


class BaseRepositoryImpl implements BaseRepository<BaseModel> {
    private model: ModelStatic<BaseModel>;

    constructor(model: ModelStatic<BaseModel>) {
        this.model = model
    }

    getAll(): Promise<BaseModel[]> {
        return this.model.findAll()
    }

    save(data: any): Promise<BaseModel> {
        return this.model.create(data, {returning:true})
    }

    findById(id: number): Promise<BaseModel | null> {
        return this.model.findByPk(id)
    }

    updateById(id: number, data: any): Promise<void| [number, BaseModel]> {
        return this.model.update(data, {
            where: {id},
            returning: true
        }).then((a) => {a[0], a[1]})
    }

    deleteById(id: number): Promise<number> {
        return this.model.destroy({
            where: {id}
        })
    }
}

export default BaseRepositoryImpl;