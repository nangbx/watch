import { AppDataSource } from "./../data-source";
import { Brand } from "../entity/Brand";
import { Request, Response } from "express";

import { BrandService } from "../services";

const brandRepository = AppDataSource.getRepository(Brand);

async function createBrand(req: Request, res: Response) {
	const { name } = req.body;
	try {
		const newBrand = await BrandService.createBrand(name);
		if (newBrand) {
			return res.status(200).json({
				msg: "Success",
				data: newBrand,
			});
		} else {
			return res.status(400).json({
				msg: "Name brand is already registered",
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

async function deleteBrand(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const data = await BrandService.getBrand(Number.parseInt(id));
		if (!data) {
			return res.status(404).json({
				msg: "Brand with that ID not found",
			});
		}
		await BrandService.deleteBrand(data);
		return res.status(200).json({
			mess: "Success",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

async function getAllBrand(req: Request, res: Response) {
	const result = await BrandService.getAllBrand();
	return res.status(200).json({
		msg: "Success",
		data: result,
	});
}

async function getBrandById(req: Request, res: Response) {
	const { id } = req.params;
	try {
		const data = await BrandService.getBrand(Number.parseInt(id));
		console.log(data);
		if (!data) {
			return res.status(404).json({
				msg: "Brand with that ID not found",
			});
		}
		return res.status(200).json({
			msg: "Success",
			data,
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal server error",
		});
	}
}

export default { createBrand, deleteBrand, getAllBrand, getBrandById };
