import { Brand } from "./../entity/Brand";
import { Model } from "./../entity/Model";
import { AppDataSource } from "../data-source";

const modelRepository = AppDataSource.getRepository(Model);

const createModel = async (brand: Brand, name: string) => {
	return await modelRepository.save(
		modelRepository.create({
			brand,
			name,
		})
	);
};

const findModelById = async (id: number) => {
	return await modelRepository.findOneBy({
		id,
	});
};
const deleteModel = async (item: Model) => {
	return await modelRepository.delete(item);
};

export default {
	createModel,
	findModelById,
	deleteModel,
};
