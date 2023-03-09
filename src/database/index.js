import Sequelize from "sequelize";
import dataConfig from "../config/database";
import User from "../models/UserModel";
import Post from "../models/PostModel";

const models = [User, Post];

const connection = new Sequelize(dataConfig);

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
