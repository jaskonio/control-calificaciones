import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Subject extends Model {
  public id!: number;
  public name!: string;
  public code!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Subject.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    code: {
      type: new DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    tableName: 'subjects',
    timestamps: true,
  }
);

export { Subject };
