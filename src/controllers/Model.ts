import { Request, Response } from "express";
import { Model } from "../entity/Model";
import { BrandService, ModelService } from "../services";

async function createModel(req: Request, res: Response) {
	const { brandId, name } = req.body;
	try {
		const brand = await BrandService.getBrand(Number.parseInt(brandId));
		if (!brand) {
			return res.status(404).json({
				msg: "Brand with that ID not found",
			});
		}

		const result = await ModelService.createModel(brand, name);
		return res.status(200).json({
			msg: "Success",
			data: result,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

async function deleteModel(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const result = await ModelService.findModelById(Number.parseInt(id));
		if (!result) {
			return res.status(404).json({
				msg: "Model with that ID not found",
			});
		}

		await ModelService.deleteModel(result);
		return res.status(200).json({
			msg: "Success",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}
export default {
	createModel,
	deleteModel,
};
