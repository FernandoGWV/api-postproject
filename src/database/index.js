import Sequelize from "sequelize";
import dataConfig from "../config/database.js";
import User from "../models/UserModel.js";
import Post from "../models/PostModel.js";

const models = [User, Post];

const connection = new Sequelize(dataConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
