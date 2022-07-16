import "reflect-metadata";
import { DataSource } from "typeorm";
import { Watch } from "./entity/Watch";
import { Brand } from "./entity/Brand";
import { Rate } from "./entity/Rate";
import { Model } from "./entity/Model";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "",
	database: "watch",
	synchronize: true,
	logging: false,
	entities: [Watch, Rate, Model, Brand],
	migrations: [],
	subscribers: [],
});
