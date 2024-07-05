import { DataTypes, Model, Sequelize } from 'sequelize';
import sequelize from '../config/database';
import { BaseModel } from './base.model';
import { Teacher } from './Teacher';


class User extends BaseModel {
  public username!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    username: {
      type: new DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    firstName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM({
        values: ['admin', 'docente', 'tutor', 'alumno'],
      }),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
)
User.belongsTo(Teacher)
export { User };