import { createConnection } from "typeorm";

export const testConnection = (drop: boolean = false) => {
  return createConnection({
    type: "sqlite",
    database: "database-test.sqlite",
    synchronize: drop,
    dropSchema: drop,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  });
};
