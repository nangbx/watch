import { AppDataSource } from "../data-source";
import { Brand } from "../entity/Brand";

const brandRepository = AppDataSource.getRepository(Brand);

const createBrand = async (name: string) => {
	const result = await brandRepository.findBy({
		name,
	});
	if (result.length > 0) {
		return null;
	}
	return await brandRepository.save(
		brandRepository.create({
			name,
		})
	);
};

const getBrand = async (brandId: number) => {
	return await brandRepository.findOne({
		select: ["id", "models", "name"],
		where: {
			id: brandId,
		},
	});
};

const getAllBrand = async () => {
	return await brandRepository.find({
		select: ["name", "models", "id"],
	});
};

const deleteBrand = async (item: Brand) => {
	return await brandRepository.remove(item);
};

export default {
	getBrand,
	deleteBrand,
	createBrand,
	getAllBrand,
};
