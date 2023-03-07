import { Router } from "express";
import UserController from "../controllers/userController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.post("/create", UserController.store);
router.get("/all", UserController.index);
router.get("/user:id", UserController.show);
router.put("/newuser", loginRequired, UserController.update);
router.delete("/delete", loginRequired, UserController.delete);

export default router;
