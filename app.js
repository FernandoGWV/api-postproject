import dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./src/database";
import userRoutes from "./src/Routes/UserRouter";
import tokenRouter from "./src/Routes/tokenRoute";
import postRouter from "./src/Routes/postRouter";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(""));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/users/", userRoutes);
    this.app.use("/token/", tokenRouter);
    this.app.use("/posts/", postRouter);
  }
}
export default new App().app;
