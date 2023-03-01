import dotenv from "dotenv";
import express from "express";

import "./src/database";

import userRoutes from "./src/routes/userRoute";

import tokenRouter from "./src/routes/tokenRoute";

dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users/", userRoutes);
    this.app.use("/token/", tokenRouter);
  }
}
export default new App().app;
