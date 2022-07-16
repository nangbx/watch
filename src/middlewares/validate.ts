import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
export const validate =
	(schema) => async (req: Request, res: Response, next: NextFunction) => {
		try {
			const {
				id,
				serial,
				year,
				waterResistance,
				color,
				size,
				amount,
				model_id,
			} = req.body;
			await schema.validate({
				id,
				serial,
				year,
				waterResistance,
				color,
				size,
				amount,
				model_id,
			});
			return next();
		} catch (err) {
			res.status(500).json({ type: err.name, message: err.message });
		}
	};
