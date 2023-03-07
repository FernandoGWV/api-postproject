import { Router } from "express";
import userController from "./controllers/UserController";
import loginRequired from "./middlewares/loginRequired";

const router = new Router();

router.post("/create", userController.store);
router.get("/all", userController.index);
router.get("/user:id", userController.show);
router.put("/newuser", loginRequired, userController.update);
router.delete("/delete", loginRequired, userController.delete);

export default router;
