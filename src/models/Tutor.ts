import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';
import { User } from './User';


class Tutor extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public userId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Tutor.init(
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
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tutors',
    timestamps: true,
  }
);

export { Tutor };
