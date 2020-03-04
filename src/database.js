import { Database } from "@vuex-orm/core";
import * as models from "./models";

const database = new Database();

Object.values(models).forEach(m => database.register(m));

export default database;
