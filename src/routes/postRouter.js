import { Router } from "express";
import postController from "../controllers/PostController";
import loginRequired from "../middlewares/loginRequired";

const router = new Router();

router.get("/store", loginRequired, postController.store);
router.get("/all", postController.index);
router.get("/:id", postController.show);
router.put("/", loginRequired, postController.update);
router.delete("/delete:id", loginRequired, postController.delete);

export default router;
