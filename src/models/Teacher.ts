import { Sequelize } from 'sequelize';
import { User } from './User';


class Teacher extends User {
  public static initialize(sequelize: Sequelize): void {
    super.initialize(sequelize);

    this.addScope('defaultScope', {
      where: {
        role: 'tutor'
      }
    });

    this.addHook('beforeValidate', (teacher: Teacher) => {
      teacher.role = 'tutor';
    });
  }
}

export { Teacher };
