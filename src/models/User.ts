import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';


export class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: new DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    role: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: true,
  }
)
