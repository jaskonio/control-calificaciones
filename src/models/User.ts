import { DataTypes, Sequelize } from 'sequelize';
import { BaseModel } from './base.model';


class User extends BaseModel {
  public username!: string;
  public password!: string;
  public firstName!: string;
  public lastName!: string;
  public birthDate!: Date;
  public role!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static initialize(sequelize: Sequelize): void {
    this.init(
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
        birthDate: {
          type: new DataTypes.DATE,
          allowNull: true,
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
  }
}

export { User };