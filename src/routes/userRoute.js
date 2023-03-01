import { Router } from "express";
import userController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/", userController.store);
router.get("/", loginRequired, userController.index);
router.get("/user:id", userController.show);

export default router;
