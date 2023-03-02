import Sequelize, { Model } from "sequelize";

export default class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: "User",
            key: "id",
          },
        },
        title: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [2, 50],
              msg: "O campo não pode ficar vazio.",
            },
          },
        },
        descripte: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [5, 200],
              msg: ["O campo precisa ser preenchido."],
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id" });
  }
}
