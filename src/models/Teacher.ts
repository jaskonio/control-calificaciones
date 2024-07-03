import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { Subject } from './Subject';

class Teacher extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public subjectId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Teacher.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    lastName: {
      type: new DataTypes.STRING(50),
      allowNull: false,
    },
    subjectId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: Subject,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'teachers',
    timestamps: true,
  }
);

export { Teacher };
