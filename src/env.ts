import { load } from "ts-dotenv";

export default load({
  DB_NAME: String,
  SERVER_PORT: Number,
});
