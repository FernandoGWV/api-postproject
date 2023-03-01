import { Router } from "express";
import postController from "../controllers/PostController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/", loginRequired, postController.store);

export default router;
