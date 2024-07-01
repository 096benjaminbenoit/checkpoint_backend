import { DataSource } from "typeorm";
import env from "./env";
import Country from "./entities/Country";
import Continent from "./entities/Continent";

export default new DataSource({
  type: "sqlite",
  database: env.DB_NAME,
  entities: [Country, Continent],
  synchronize: true,
});
