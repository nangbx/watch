import { Watch } from "./../entity/Watch";

import { AppDataSource } from "../data-source";
import { ModelService } from ".";

const watchRepository = AppDataSource.getRepository(Watch);

const getAllWatch = async () => {
	return await watchRepository.find({});
};

const createWatch = async (
	id: number,
	serial: string,
	year: Date,
	waterResistance: string,
	color: string,
	amount: number,
	model_id: number
) => {
	const model = await ModelService.findModelById(model_id);
	return await watchRepository.save(
		watchRepository.create({
			serial,
			year,
			waterResistance,
			color,
			amount,
			model,
		})
	);
};
export default {
	getAllWatch,
};
