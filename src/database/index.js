import Sequelize from "sequelize";
import databaseConfig from "../config/database";

import User from "../models/UserModel";
import Post from "../models/PostModel";

const models = [User, Post];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
