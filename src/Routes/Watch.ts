import { Router } from "express";
import { WatchController } from "../controllers";
import { validate } from "../middlewares/validate";
import { watchSchema } from "../validationSchema";

const router = Router();
router.get("/", validate(watchSchema), WatchController.getAll);

export default router;
