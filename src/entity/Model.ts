import { Brand } from "./Brand";
import { Watch } from "./Watch";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToOne,
	JoinColumn,
} from "typeorm";

@Entity()
export class Model {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@OneToMany((_type) => Watch, (watch: Watch) => watch.id, {
		cascade: true,
	})
	watches: Watch[];

	@ManyToOne((_type) => Brand, (brand: Brand) => brand.models, {
		cascade: ["insert"],
	})
	@JoinColumn()
	brand: Brand;
}
