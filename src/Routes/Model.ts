import { Router } from "express";
import {
	BrandController,
	ModelController,
	WatchController,
} from "../controllers";

const router = Router();
router.post("/new", ModelController.createModel);
router.delete("/:id", ModelController.deleteModel);

export default router;
