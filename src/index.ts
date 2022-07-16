import { AppDataSource } from "./data-source";
import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";
import routes from "./Routes/index";

dotenv.config();
const app: express.Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AppDataSource.initialize()
	.then(async () => {
		//console.log("Inserting a new user into the database...");
		// const user = new User()
		// user.firstName = "Timber"
		// user.lastName = "Saw"
		// user.age = 25
		// await AppDataSource.manager.save(user)
		// console.log("Saved a new user with id: " + user.id)
		// console.log("Loading users from the database...")
		// const users = await AppDataSource.manager.find(User)
		// console.log("Loaded users: ", users)
		// console.log("Here you can setup and run express / fastify / any other framework.")
		app.use("/", routes);
		app.listen(process.env.PORT || 5000, () => {
			console.log("Server running on port " + (process.env.PORT || 5000));
		});
	})
	.catch((error) => console.log(error));
