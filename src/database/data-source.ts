import { DataSource, DataSourceOptions } from "typeorm";
import config from "../utils/config/config";


export const dataSourceOptions: DataSourceOptions = {
  type: "postgres",
  synchronize: config.NODE_ENV === "test",
  dropSchema: config.NODE_ENV === "test",
  logging: ["development", "test"].includes(config.NODE_ENV),
  url: config.DATABASE_URL,
  entities: ["src/entities/*{.js,.ts}"],
  migrations: ["src/migrations/*{.js,.ts}"],
  subscribers: ["src/subscribers/*{.js,.ts}"],
  ssl: ["development", "test"].includes(config.NODE_ENV)
    ? undefined
    : { rejectUnauthorized: false },
    
};

export const AppDataSource = new DataSource(dataSourceOptions);
