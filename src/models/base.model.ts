import { Model } from "sequelize";

export class BaseModel extends Model {
    public id!: number;
}