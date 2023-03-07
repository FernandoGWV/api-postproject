import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "O campo precisa ter entre 3 à 20 caracteres.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já existe.",
          },
          validate: {
            isEmail: {
              msg: "Email invalido.",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          default: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: ["8", "50"],
              msg: "A senha precisa ter mais de 8 caracteres.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook("beforeSave", async (users) => {
      if (users.password) {
        users.password_hash = await bcryptjs.hash(users.password, 8);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: "user_id" });
  }
}
