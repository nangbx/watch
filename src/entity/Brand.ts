import { Model } from "./Model";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Brand {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@OneToMany((_type) => Model, (model: Model) => model.brand, {
		cascade: true,
	})
	models: Model[];
}
