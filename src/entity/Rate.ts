import { Watch } from "./Watch";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from "typeorm";

@Entity()
export class Rate {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	value!: number;

	@ManyToOne((_type) => Watch, (watch) => watch.id, {
		cascade: ["insert", "update", "soft-remove"],
	})
	@JoinColumn({ name: "watch_id" })
	watch: Watch;
}
