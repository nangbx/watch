import { Request, Response } from "express";
import { WatchService } from "../services";

async function getAll(req: Request, res: Response) {
	try {
		const result = await WatchService.getAllWatch();
		return res.json({
			result,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

async function createWatch(req: Request, res: Response) {
	const { id, serial, year, waterResistance, color, size, amount, model_id } =
		req.body;
	try {
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

export default { getAll };
