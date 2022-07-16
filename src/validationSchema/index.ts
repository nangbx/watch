import * as yup from "yup";

export const watchSchema = yup.object().shape({
	id: yup.number().required(),
	serial: yup.string().required(),
	year: yup.date().required(),
	waterResistance: yup.string().required(),
	color: yup.string().required(),
	size: yup.string().required(),
	amount: yup.number().min(0).required(),
	model_id: yup.number().required(),
});
