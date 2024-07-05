import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { User } from './User';
import { BaseModel } from './base.model';


class Teacher extends BaseModel {
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  static asoci
}

Teacher.init(
  {
  },
  {
    sequelize,
    tableName: 'teachers',
    timestamps: true,
  }
);

Teacher.hasOne(User)
export { Teacher };
