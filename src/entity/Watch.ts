import { Model } from "./Model";
import { Rate } from "./Rate";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	ManyToMany,
	ManyToOne,
	JoinColumn,
} from "typeorm";

@Entity({ name: "Watch" })
export class Watch {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	serial!: string;

	@Column()
	year!: Date;

	@Column()
	waterResistance: string;

	@Column()
	color!: string;

	@Column()
	size!: string;

	@Column()
	amount!: number;

	@ManyToOne((_type) => Model, (model: Model) => model.id, {
		cascade: ["insert", "update", "soft-remove"],
	})
	@JoinColumn({ name: "model_id" })
	model: Model;

	@OneToMany((_type) => Rate, (rate: Rate) => rate.watch, {
		cascade: ["insert", "update", "soft-remove"],
	})
	rate: Rate[];
}
