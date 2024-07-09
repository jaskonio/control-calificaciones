import { Sequelize } from 'sequelize';
import { User } from './User';


class Tutor extends User {
  public static initialize(sequelize: Sequelize): void {
    super.initialize(sequelize);

    this.addScope('defaultScope', {
      where: {
        role: 'docente'
      }
    });

    this.addHook('beforeValidate', (tutor: Tutor) => {
      tutor.role = 'docente';
    });
  }
}

export { Tutor };
