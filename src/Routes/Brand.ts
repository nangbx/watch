import { Router } from "express";
import { BrandController, WatchController } from "../controllers";

const router = Router();
router.get("/", BrandController.getAllBrand);
router.get("/:id", BrandController.getBrandById);
router.post("/new", BrandController.createBrand);
router.delete("/:id", BrandController.deleteBrand);

export default router;
